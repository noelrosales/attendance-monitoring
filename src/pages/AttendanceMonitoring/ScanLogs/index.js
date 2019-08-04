import React from 'react';
import styled from 'styled-components';

const ScanLogs = () => {
    return (
        <Layout>
            <h1>Logs Bitch!</h1>
        </Layout>
    )
}

export default ScanLogs;

const Layout = styled.div`
    grid-area: scan-logs;
    display: flex;
    align-items: center;
    justify-content: center;
`;
