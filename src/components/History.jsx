import React from 'react';
import {Table} from 'antd';

const columns = [
    {
        title: '用户Id',
        dataIndex: 'uid',
        width: 150,
    },
    {
        title: '用户名',
        dataIndex: 'username',
        width: 150,
    },
    {
        title: '检测的图像',
        dataIndex: 'imageSrc',
        width: 150,
    },
    {
        title: '源和目标区分结果',
        dataIndex: 'imageDistinguishmentResult',
        width: 150,
    },
    {
        title: '相似性检测结果',
        dataIndex: 'imageDetectionResult',
        width: 150,
    },
    {
        title: '创建时间',
        dataIndex: 'gmtCreate:',
        width: 150,
    },
];

const data = [];
for (let i = 0; i < 20; i++) {
    data.push({
        key: i,
        uid:i,
        username: `zl ${i}`,
        imageSrc:'图像url',
        imageDistinguishmentResult:'真',
        imageDetectionResult:'真',
        gmtCreate:'${i}',
    });
}

const History = () => (
    <Table columns={columns} dataSource={data} pagination={{pageSize: 10}} scroll={{y: 500}}/>
)

export default History
