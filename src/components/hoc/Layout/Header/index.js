import React from 'react';
import styled from 'styled-components';

export default () => {
    return (
        <Header>
            <h3>AMS</h3>
        </Header>
    )
}

const Header = styled.header`
    padding: 10px 20px;
    grid-area: header;
    background: #fff;
    color: rgba(0,0,0,.8);
    box-shadow: 0px 1px 8px rgba(0,0,0,.4), 0px 1px 10px rgba(0,0,0,.6);
    z-index: 1;

    h3{
        margin-bottom: 0px;
    }
`;

