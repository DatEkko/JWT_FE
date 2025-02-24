import React, { useContext, useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './auth.context';

const HeaderComponent = () => {
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);

    const items = [
        {
            label: <Link to={"/"}>Home Page</Link>,
            key: 'home',
            icon: <MailOutlined />,
        },

        ...(auth.isAuthenticated ? [{
            label: <Link to={"/user"}>Users</Link>,
            key: 'user',
            icon: <MailOutlined />,
        }] : []),

        {
            label: auth.isAuthenticated ? `Welcome, ${auth?.user?.name ?? ""}` : "Setting",
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                ...(auth.isAuthenticated ?
                    [
                        {
                            label: <span
                                onClick={() => {
                                    localStorage.clear("access_token");
                                    setAuth({
                                        isAuthenticated: false,
                                        user: {
                                            email: "",
                                            name: ""
                                        }
                                    })
                                    navigate("/")
                                }}
                            >
                                Đăng Xuất
                            </span>,
                            key: 'logout',
                        },
                    ]
                    :
                    [
                        {
                            label: <Link to={"/register"}>Đăng Ký</Link>,
                            key: 'register',
                        },
                        {
                            label: <Link to={"/login"}>Đăng Nhập</Link>,
                            key: 'login',
                        },
                    ]
                )
            ]
        },
    ];
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default HeaderComponent;