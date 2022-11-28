import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Typography, Table, Progress, Space } from 'antd'
import Layout, { Content } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';


const columns = [
  {
    title: 'subTaskId',
    dataIndex: 'taskId',
    key: 'taskId',
  },
  {
    title: 'subTaskName',
    dataIndex: 'taskName',
    key: 'taskName',
  },
  {
    title: 'endDate',
    dataIndex: 'endDate',
    key: 'endDate',
  },

  {
    title: 'actions',
    dataIndex: 'actions',
    key: 'actions',
  },
];


const subTaskData = [
  {
    taskId: '001-a',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    actions: <Button type="primary">Complete</Button>

  },

  {
    taskId: '001-b',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    actions: <Button type="primary">Complete</Button>

  },

  {
    taskId: '001-c',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    actions: <Button type="primary">Complete</Button>

  },

  {
    taskId: '001-d',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    actions: <Button type="primary">Complete</Button>


  },
  {
    taskId: '001-e',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    actions: <Button type="primary">Complete</Button>

  },

];





const Sub = () => {
  return (
    <div>
      <Layout>
        <Content>
          <Typography.Title level={5} style={{ margin: 2 }}>   <Link to="/"><Button type="" ><ArrowLeftOutlined type="message" style={{ fontSize: '16px', margin: 2 }} /> </Button></Link>
            Task: Finish App Task1 </Typography.Title>
          <Space wrap style={{ marginLeft: "1040px", marginBottom: "10px" }}>
            <Progress type="circle" percent={75} />
          </Space>

          <Table dataSource={subTaskData} columns={columns} />



        </Content>
      </Layout>


    </div >
  )
}

export default Sub
