import React, { FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { authStore } from '../../../../store/auth.store';
import { ValueType } from '../../../../types';
import { LoginDto } from '../../../../types/services/auth.types';
import Checkbox from '../../../Atoms/Form/Checkbox';
import Input from '../../../Atoms/Form/Input';
import Button from '../../../Molecules/Button/Button';

export default function SignInForm() {
  const navigate = useNavigate();

  const [details, setDetails] = useState<LoginDto>({
    username: '',
    password: '',
  });

  const [error, setError] = useState<string>('');

  const handleChange = (e: ValueType) => {
    console.log(e.name);
    setDetails((details) => ({
      ...details,
      [e.name]: e.value,
    }));
  };

  const { mutateAsync, isLoading } = authStore.login();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await mutateAsync(details, {
      async onSuccess(data) {
        localStorage.setItem('jwt_info', JSON.stringify(data));
        toast.success('Login successful', { duration: 1200 });
        navigate('/dashboard');
      },
      onError(__error) {
        toast.error('Authentication failed', { duration: 3000 });
        setError('Invalid credentials');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-danger text-center"> {error ? error : null}</p>
      <div className="input-control mb-3">
        <Input
          placeholder={'Username'}
          name={'username'}
          handleChange={handleChange}
          value={details.username}
        />
      </div>
      <div className="input-control mb-3">
        <Input
          placeholder={'Password'}
          name={'password'}
          type={'password'}
          handleChange={handleChange}
          value={details.password}
        />
      </div>
      <div className="d-flex justify-content-between mb-3">
        <div className="input-control col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <Checkbox />
        </div>
        <div className="meta-area col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <Link to={'/forgot-password'}>
            <a className="f-password">Pamiršote slaptažodį?</a>
          </Link>
        </div>
      </div>
      <div className="mb-4">
        <Button type={'submit'} disabled={isLoading}>
          Prisijungti
        </Button>
      </div>
    </form>
  );
}
