import React from 'react';
import styled from 'styled-components';
import LoginFrom from './LoginForm';

const Login = () => {
    return (
        <Layout>
            <LoginFrom />
        </Layout>
    )
}

export default Login;

const Layout = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

