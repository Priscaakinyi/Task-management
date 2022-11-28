
import { ArrowLeftOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Card, Col, Dropdown, Grid, Menu,Tabs, Row, Select, Space, Typography,  Collapse, Table, Progress} from 'antd'
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';
import AddTodo from '../components/AddTodo'

const { Panel } = Collapse;



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


const highPriorityDataCompleted= [
  {
    taskId: '001-a',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    actions:  <Button  as={Link}
    to="#"
  	variant="text" type="primary">Complete</Button>
    
  },

   {
    taskId: '001-b',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
   actions:  <Button type="primary">Complete</Button>
    
  },
  
];

const mediumPriorityDataCompleted = [
  {
    taskId: '001-c',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    actions:  <Button type="primary">Complete</Button>

  },

   {
    taskId: '001-d',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    actions:  <Button type="primary">Complete</Button>
   
    
  },
  
];

const lowPriorityDataCompleted = [
  {
    taskId: '001-e',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    actions:  <Button type="primary">Complete</Button>
    
  },

   
  
];


const { Title,Text } = Typography;
const Sub = () => {
  return (
    <div>
        <Layout>
            <Content>
              <Typography.Title level={5} style={{ margin: 2 }}>   <Button type="" ><ArrowLeftOutlined type="message" style={{ fontSize: '16px', margin: 2 }}  /> </Button>
                  Task: Finish App Task1 </Typography.Title>
               
            
            <Tabs>
                <Tabs.TabPane>
                    <Collapse accordion>
                        <Panel header="High Priority" key="1">
                            <Table dataSource={highPriorityDataCompleted} columns={columns} /> </Panel>
                       
                        <Panel header="Medium Priority" key="2">
                            <Table dataSource={mediumPriorityDataCompleted} columns={columns} /></Panel>
                       
                        <Panel header="Low Priority" key="3">
                            <Table dataSource={lowPriorityDataCompleted} columns={columns} /> </Panel>
                        
                    </Collapse>
                    
                </Tabs.TabPane>
            </Tabs>
            </Content>
        </Layout>


    </div>
  )
}

export default Sub
