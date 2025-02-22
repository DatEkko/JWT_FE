import React from 'react';
import { Button, Form, Input, notification } from 'antd';
import { createUserService } from '../util/apiService';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const { name, email, password } = values;

        const res = await createUserService(name, email, password);
        if (res) {
            notification.success({
                message: "CREATE ACCOUNT SUCCESS",
                description: "Success"
            })
            navigate("/login")
        } else {
            notification.error({
                message: "CREATE ACCOUNT ERROR",
                description: "Error"
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

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name !',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label={null}>
                    <Button style={{ float: "right" }} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default RegisterPage;