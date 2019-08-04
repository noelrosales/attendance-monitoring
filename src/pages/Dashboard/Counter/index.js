import React from 'react';
import styled from 'styled-components';

const Counter = ({entity, current, total}) => {
    return (
        <Layout>
            <h3>{current} / {total}</h3>
            <h6>{entity}</h6>
        </Layout>
    )
}

export default Counter;

const Layout = styled.div`
    padding: 20px;
    color: #fff;
    background: blueviolet;
    border-radius: 5px;
`;


