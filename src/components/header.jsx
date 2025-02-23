import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    const items = [
        {
            label: <Link to={"/"}>Home Page</Link>,
            key: 'home',
            icon: <MailOutlined />,
        },
        {
            label: <Link to={"/user"}>Users</Link>,
            key: 'user',
            icon: <MailOutlined />,
        },
        {
            label: 'Secret File',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to={"/register"}>Đăng Ký</Link>,
                    key: 'register',
                },
                {
                    label: <Link to={"/login"}>Đăng Nhập</Link>,
                    key: 'login',
                },
            ],
        },
    ];
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default HeaderComponent;