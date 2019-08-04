import React from 'react';
import styled from 'styled-components';

const Scanner = () => {
    return (
        <Layout>
            <h1>Scan Sheet!</h1>
        </Layout>
    )
}

export default Scanner;

const Layout = styled.div`
    grid-area: scanner;
    display: flex;
    align-items: center;
    justify-content: center;
`;
