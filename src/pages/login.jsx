import React from 'react';
import { Button, Form, Input, notification } from 'antd';
import { loginService } from '../util/apiService';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/auth.context';
import { useContext } from 'react';

const LoginPage = () => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const onFinish = async (values) => {
        const { email, password } = values;

        const res = await loginService(email, password);

        if (res && res.EC === 0) {
            localStorage.setItem("access_token", res.access_token);

            setAuth({
                isAuthenticated: true,
                user: {
                    email: res.user?.email ?? "",
                    name: res.user?.name ?? "",
                }
            });

            notification.success({
                message: "LOGIN SUCCESS",
                description: "Success"
            });

            navigate("/");

        } else {
            notification.error({
                message: "LOGIN FAIL",
                description: res.EM ? res.EM : "Error"
            })
        }

    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <Form
                name="basic"
                labelCol={{
                    span: 10,
                }}
                wrapperCol={{
                    span: 25,
                }}
                style={{
                    width: "500px",
                    border: "1px solid #ccc",
                    padding: "20px",
                    borderRadius: "8px"
                }}

                onFinish={onFinish}
                layout='vertical'
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email !',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item label={null}>
                    <Button style={{ float: "right" }} type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginPage;