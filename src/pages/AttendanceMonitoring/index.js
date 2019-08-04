import React from 'react';
import styled from 'styled-components';
import Scanner from './Scanner';
import ScanLogs from './ScanLogs';
import Header from '../../components/hoc/Layout/Header';

const AttendanceMonitoring = () => {
    return (
        <Grid>
            <Header />
            <Scanner />
            <ScanLogs />
        </Grid>
    )
}

export default AttendanceMonitoring;

const Grid = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "header header"
                         "scanner scan-logs";
`;

