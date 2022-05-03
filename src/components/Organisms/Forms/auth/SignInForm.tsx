import React, {FormEvent, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../../Atoms/Form/Input';
import Checkbox from '../../../Atoms/Form/Checkbox';
import Button from '../../../Molecules/Button/Button';
import {LoginInfo} from '../../../../types/services/auth.types';
import {ValueType} from '../../../../types';
import {signin} from '../../../../services/auth/auth.service'

export default function SignInForm() {
    const navigate = useHistory();
    
    const [details, setDetails]= useState<LoginInfo>({
        username: '',
        password: ''
    });

    const [error, setError] = useState<string>('');

    const handleChange = (e: ValueType) => {
        console.log(e.name);
        setDetails((details) => ({
            ...details,
            [e.name]: e.value
        }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        const res = await signin(details);
        if (res.response?.data.status == 401) {
            setError('Invalid credentials')
        }
        else {
            // navigate.push("/employees");
            window.location.href = '/employees';
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="text-danger text-center"> {(error)? error: null}</p>
            <div className="input-control mb-3">
                <Input placeholder={'Username'} name={'username'} handleChange={handleChange} value={details.username}/>
            </div>
            <div className="input-control mb-3">
                <Input placeholder={'Password'} name={'password'} type={'password'} handleChange={handleChange} value={details.password}/>
            </div>
            <div className="d-flex justify-content-between mb-3">
                <div className="input-control col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <Checkbox/>
                </div>
                <div className="meta-area col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <a href="#" className="f-password">Pamiršote slaptažodį?</a>
                </div>
            </div>
            <div className="mb-4">
                <Button children={'Prisijungti'} type={'submit'}/>
            </div>
        </form>
    )
}