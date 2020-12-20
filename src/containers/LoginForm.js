import {Form, Input, Button, Checkbox, Col, Typography} from 'antd';
import React from 'react';
import styled from 'styled-components'

const {Title} = Typography;


const layout = {
    labelCol: {span: 13},
    wrapperCol: {span: 5, offset: 1},
};
const tailLayout = {
    wrapperCol: {offset: 16, span: 16},
};
const style = {padding: '10px 0'};

const LoginForm = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (

        <Form
            {...layout}
            name="basic"
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{marginTop: '220px'}}
        >
            <Col offset={14} style={{marginBottom:'65px'}}>
                <Title>生成人脸检测系统</Title>
            </Col>
            <Form.Item
                label="用户名"
                name="username"
                rules={[{required: true, message: '请输入用户名'}]}
                style={style}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[{required: true, message: '请输入密码'}]}
                style={style}
            >
                <Input.Password/>
            </Form.Item>


            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" shape={'round'} style={{width:'80px'}}>
                    登录
                </Button>
            </Form.Item>
        </Form>

    );
};

export default LoginForm

