import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Card, Col, Dropdown, Grid, Menu,Tabs, Row, Select, Space, Typography,  Collapse, Table, Progress} from 'antd'
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';
import AddTodo from '../components/AddTodo'

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const highPriorityDataNotStarted = [
  {
    taskId: '001',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
   progress: <Progress percent={0} size="small"/>,
   actions:  <Button type="primary">Show more</Button>
    
  },

   {
    taskId: '002',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
   progress: <Progress percent={0} size="small"/>,
   actions:  <Button type="primary">Show more</Button>
    
  },
  
];

const mediumPriorityDataNotStarted = [
  {
    taskId: '003',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    progress: <Progress percent={0} size="small"/>,
    actions:  <Button type="primary">Show more</Button>
    
  },

   {
    taskId: '004',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    progress:<Progress percent={0} size="small"/>,
    actions:  <Button type="primary">Show more</Button>
   
    
  },
  
];

const lowPriorityDataNotStarted = [
  {
    taskId: '005',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    progress:<Progress percent={0} size="small"/>,
    actions:  <Button type="primary">Show more</Button>
    
  },

   {
    taskId: '006',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    progress: <Progress percent={0} size="small"/>,
    actions:  <Button type="primary">Show more</Button>
    
  },
  
];

const highPriorityDataInProgress= [
  {
    taskId: '001',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
   progress: <Progress percent={30} size="small"/>,
   actions:  <Button type="primary">Show more</Button>
    
  },

   {
    taskId: '002',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
   progress: <Progress percent={30} size="small"/>,
   actions:  <Button type="primary">Show more</Button>
    
  },
  
];

const mediumPriorityDataInProgress = [
  {
    taskId: '003',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    progress: <Progress percent={30} size="small"/>,
    actions:  <Button type="primary">Show more</Button>
    
  },

   {
    taskId: '004',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    progress:<Progress percent={30} size="small"/>,
    actions:  <Button type="primary">Show more</Button>
   
    
  },
  
];

const lowPriorityDataInProgress= [
  {
    taskId: '005',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    progress:<Progress percent={30} size="small"/>,
    actions:  <Button type="primary">Show more</Button>
    
  },

   {
    taskId: '006',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    progress: <Progress percent={30} size="small"/>,
    actions:  <Button type="primary">Show more</Button>
    
  },
  
];

const highPriorityDataCompleted= [
  {
    taskId: '001',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
   progress: <Progress percent={100} size="small"/>,
   actions:  <Button type="primary">Show more</Button>
    
  },

   {
    taskId: '002',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
   progress: <Progress percent={100} size="small"/>,
   actions:  <Button type="primary">Show more</Button>
    
  },
  
];

const mediumPriorityDataCompleted = [
  {
    taskId: '003',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    progress: <Progress percent={100} size="small"/>,
    actions:  <Button type="primary">Show more</Button>

  },

   {
    taskId: '004',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    progress:<Progress percent={100} size="small"/>,
    actions:  <Button type="primary">Show more</Button>
   
    
  },
  
];

const lowPriorityDataCompleted = [
  {
    taskId: '005',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    progress:<Progress percent={100} size="small"/>,
    actions:  <Button type="primary">Show more</Button>
    
  },

   {
    taskId: '006',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    progress: <Progress percent={100} size="small"/>,
    actions:  <Button type="primary">Show more</Button>
    
  },
  
];

const columns = [
  {
    title: 'taskId',
    dataIndex: 'taskId',
    key: 'taskId',
  },
  {
    title: 'taskName',
    dataIndex: 'taskName',
    key: 'taskName',
  },
  {
    title: 'endDate',
    dataIndex: 'endDate',
    key: 'endDate',
  },
    {
    title: 'progress',
    dataIndex: 'progress',
    key: 'progress',
  },
    {
    title: 'actions',
    dataIndex: 'actions',
    key: 'actions',
  },
];

const { Title,Text } = Typography;

const Todo = () => {
  return (
    <div>
    <Layout>
        <Content >
        <Card>
            <Row>
                <Col span={8} style={{marginLeft:"1090px"}}>  <AddTodo/></Col>
             </Row>
        </Card>

        {/*Not Started tabs */}
       <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="Not Started" key="1">
        {/* collapsable */}
     <Collapse accordion>
        {/* high priority collapsable */}
    <Panel header="High Priority" key="1">
   <Table dataSource={highPriorityDataNotStarted} columns={columns} />;
    </Panel>
     {/* medium priority collapsable */}
    <Panel header="Medium Priority" key="2">
   <Table dataSource={mediumPriorityDataNotStarted} columns={columns} />;
    </Panel>
    {/* low priority collapsable */}
    <Panel header="Low Priority" key="3">
     <Table dataSource={lowPriorityDataNotStarted} columns={columns} />;
    </Panel>
  </Collapse>
   {/* collapsable end */}
    </Tabs.TabPane>

    {/* In progress tab */}
    <Tabs.TabPane tab="In progress" key="2">
            {/* collapsable */}
     <Collapse accordion>
        {/* high priority collapsable */}
    <Panel header="High Priority" key="1">
       <Table dataSource={highPriorityDataInProgress} columns={columns} />;
    </Panel>
     {/* medium priority collapsable */}
    <Panel header="Medium Priority" key="2">
     <Table dataSource={mediumPriorityDataInProgress} columns={columns} />;
    </Panel>
    {/* low priority collapsable */}
    <Panel header="Low Priority" key="3">
     <Table dataSource={lowPriorityDataInProgress} columns={columns} />;
    </Panel>
  </Collapse>
   {/* collapsable end */}
    </Tabs.TabPane>

   
    {/* completed tab */}
    <Tabs.TabPane tab="Completed" key="3">
            {/* collapsable */}
     <Collapse accordion>
        {/* high priority collapsable */}
    <Panel header="High Priority" key="1">
     <Table dataSource={highPriorityDataCompleted} columns={columns} />;
    </Panel>
     {/* medium priority collapsable */}
    <Panel header="Medium Priority" key="2">
      <Table dataSource={mediumPriorityDataCompleted} columns={columns} />;
    </Panel>
    {/* low priority collapsable */}
    <Panel header="Low Priority" key="3">
     <Table dataSource={lowPriorityDataCompleted} columns={columns} />;
    </Panel>
  </Collapse>
   {/* collapsable end */}
    </Tabs.TabPane>
 
  </Tabs>
       


       

       
       




         </Content>
    </Layout>
        
        
      

    </div>
  )
}

export default Todo