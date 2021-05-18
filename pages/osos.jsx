import React, { useState } from 'react'
import {
  Row,
  Col,
  Table,
  Button
} from "antd";
import {
  BulbOutlined
} from '@ant-design/icons'

const columns = [
  {
    title: 'ID',
    width: 100,
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => a.id - b.id,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Título',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Contenido',
    dataIndex: 'body',
    key: 'body',
    ellipsis: true,
  },
];

const Osos = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(resObj => {
        setPosts(resObj);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }

  return (
    <Row style={{ margin: 'auto' }}>
      <Col xs={24} sm={{ offset:2, span:20 }} xl={{ offset:2, span:2 }}>
        <h1>Hola!</h1>
        <p>Estamos en la página de los Osos.</p>
        <Button danger loading={loading} onClick={fetchData}>Cargar <BulbOutlined /></Button>
      </Col>

      <Col xs={24} sm={{ offset:2, span:20 }} xl={{ offset:0, span: 18 }}>
        <Table loading={loading} bordered size="small" dataSource={posts} columns={columns} />
      </Col>
    </Row>
  );
};
export default Osos;
