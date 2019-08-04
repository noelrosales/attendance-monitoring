import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/hoc/Layout';
import Counter from './Counter';

const Dashboard = () => {
    return (
        <Layout>
            <FlexBox>
                <Counter 
                    entity={"Users"}
                    current={13}
                    total={300}/>

                <Counter 
                    entity={"Students"}
                    current={256}
                    total={350}/>

                <Counter 
                    entity={"Messages"}
                    current={153}
                    total={670}/>
            </FlexBox>
            <h1>This is where the magic happens</h1>
        </Layout>
    )
}

export default Dashboard;

const FlexBox = styled.div`
    display: flex;

    &>*{
        flex: 1;
        margin: 10px
    }
`;

