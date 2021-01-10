import {Menu} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import {
    HeartOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import '../../css/index.css'

const {SubMenu} = Menu;

const LeftMenu = () => (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['/index']}>
        <Menu.Item key="/index" icon={<HeartOutlined/>}>
            <Link to={'/index'}>欢迎</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined/>} title="个人帐号管理">
            <Menu.Item key="/profile">
                <Link to={'/profile'}>个人信息管理</Link>
            </Menu.Item>
            <Menu.Item key="/password">
                <Link to={'/password'}>帐号安全管理</Link>
            </Menu.Item>
        </SubMenu>
        <Menu.Item key="/detection" icon={<VideoCameraOutlined/>}>
            <Link to={'/detection'}>人脸图片检测</Link>
        </Menu.Item>
        <Menu.Item key="/history" icon={<UploadOutlined/>}>
            <Link to={'/history'}>近期历史记录</Link>
        </Menu.Item>
    </Menu>
)

export default LeftMenu
