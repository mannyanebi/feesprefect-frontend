import Container from 'components/atoms/a-container';
import NavBar from 'components/molecules/m-navbar';
import LoginForm from 'components/organisms/o-login';
import React from 'react';

function Login() {
    return (
        <Container className="p-[2rem]">
            <NavBar />
            <div className="mx-auto my-[5rem] md:w-1/2">
                <LoginForm />
            </div>
        </Container>
    );
}

export default Login;
