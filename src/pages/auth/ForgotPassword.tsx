import '../../styles/pages/Signin.scss';

import React from 'react';

// import { useRouteMatch } from 'react-router-dom';
import Heading from '../../components/Molecules/Text/Heading';
import ForgotPasswordForm from '../../components/Organisms/Forms/auth/ForgotPasswordForm';

export default function ForgotPassword() {
  //   const { path } = useRouteMatch();

  return (
    <React.Fragment>
      <div className="container-fluid bg-purple">
        <div className="page-container">
          <div className="content bg-white col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="form-container">
              <div className="header">
                <div className="image-container">
                  <img src={'/assets/images/sass-logo.png'} width={'100'} alt="Logo" />
                </div>
                <div className="form-title mt-4">
                  <Heading text={'Forgot Password'} color={'dark-blue'} weight={'bold'} />
                </div>
              </div>
              <div className="body mt-4">
                <ForgotPasswordForm />
              </div>
              <div className="footer">
                <p className="text-center meta-txt">
                  Neturite prisijungimo? <span className="meta-colored">Sukurti</span>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
