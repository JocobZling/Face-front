import {Form, Input, Button, Col, Typography} from 'antd';
import React from 'react'
import {connect} from 'react-redux'
import {actions as userActions} from '../ducks/user'
import {withRouter} from 'react-router-dom'
import '../css/form.css'

const {Title} = Typography;

const layout = {
    labelCol: {span: 9},
    wrapperCol: {span: 9, offset: 1},
};

const tailLayout = {
    wrapperCol: {offset: 7, span: 12},
};

const style = {
    padding: '10px 0',
    color: 'white'
};


const LoginForm = ({login}) => {
    const onFinish = values => {
        login(values)
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
            style={{
                padding: '20px 0',
                backgroundColor: 'rgba(35,31,31,0.55)',
            }}
        >
            <Col offset={7} style={{marginBottom: '5vh'}}>
                <Title style={{color: 'white'}}>生成人脸检测系统</Title>
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
                <Button type="primary" htmlType="submit"  style={{width: '100%',backgroundColor:'black',borderColor:'black'}} >
                    登录
                </Button>
            </Form.Item>
        </Form>

    );
};
const mapDispatchToProps = dispatch => ({
    login: (data) => dispatch(userActions.login(data)),
});

export default connect(null, mapDispatchToProps)(withRouter(LoginForm))

