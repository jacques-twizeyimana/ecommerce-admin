import '../../styles/pages/Signin.scss';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Heading from '../../components/Molecules/Text/Heading';
import Input from '../../components/Atoms/Form/Input';
import Checkbox from '../../components/Atoms/Form/Checkbox';
import Button from '../../components/Molecules/Button/Button';

export default function Signin() {
    const {path} = useRouteMatch();
    console.log(path);

    return (
        <React.Fragment>
            <div className="container-fluid bg-purple">
                <div className="page-container">
                    <div className="content bg-white col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="form-container">
                            <div className="header">
                                <div className="image-container">
                                    <img src={'/assets/images/sass-logo.png'} alt="Logo"/>
                                </div>
                                <div className="form-title mt-5">
                                    <Heading text={'Prisijungimas'} color={'dark-blue'} weight={'bold'} />
                                </div>
                            </div>
                            <div className="body mt-5">
                                <div className="input-control">
                                    <Input placeholder={'Email'}/>
                                </div>
                                <div className="input-control">
                                    <Input placeholder={'Password'} type={'password'}/>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="input-control">
                                        <Checkbox/>
                                    </div>
                                    <div className="meta-area">
                                        <a href="#" className="f-password">Pamiršote slaptažodį?</a>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <Button children={'Prisijungti'}/>
                                </div>
                            </div>
                            <div className="footer">
                                <p className="text-center meta-txt">Neturite prisijungimo? <span className="meta-colored">Sukurti</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}