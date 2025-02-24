import { notification, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { getAllUser } from '../util/apiService';

const UserPage = () => {
    const [dataUser, setDataUser] = useState([])
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    useEffect(() => {
        const fetchDataUser = async () => {
            const res = await getAllUser();
            if (res && res.EC === 0) {
                setDataUser(res.data)
            } else {
                notification.error({
                    message: "Unauthorized",
                    description: res.error.name
                })
            }
        }

        fetchDataUser();
    }, [])

    return (
        <div style={{ padding: "20px", border: "2px solid #ccc" }}>
            <Table
                rowKey={"_id"}
                columns={columns}
                dataSource={dataUser} />
        </div>
    )
}

export default UserPage;