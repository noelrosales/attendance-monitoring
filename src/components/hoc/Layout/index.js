import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = (props) => {
    return (
        <Grid>
            <Header />
            <Sidebar />
            <Page>
                {props.children}
            </Page>
        </Grid>
    )
}

export default Layout;

const Grid = styled.div`
    display: grid;
    grid-template-rows: auto 1fr ;
    grid-template-columns: auto 1fr;
    grid-template-areas: "header header header"
                         "sidebar page page";
    height: 100vh;
`;

const Page = styled.div`
    grid-area: page;
    padding: 20px;
    background: rgba(0,0,0,.05);

    &>*{
        border: 1px solid rgba(0,0,0,.4);
        border-radius: 5px;
        background: #fff
    }
`


