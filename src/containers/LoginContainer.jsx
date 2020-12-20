import React from 'react';
import {Row, Col, Image, Layout} from 'antd';
import img from '../images/login.jpg'
import styled from 'styled-components'
import LoginForm from "./LoginForm";

const {Content, Sider} = Layout;

const WelcomeImage = styled('img')`
    width:100%
`

const LoginContainer = () => (
    <Layout>
        <Sider style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
        }} width={"40%"}> <WelcomeImage src={img} height={'100%'} alt={'login'}/> </Sider>
        <Content style={{
            height: '100vh',
        }}>
            <LoginForm/>
        </Content>
    </Layout>
)

export default LoginContainer;
