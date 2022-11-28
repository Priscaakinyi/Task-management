import { Button, Card, Col, Tabs, Row, Collapse, Table, Progress } from 'antd'
import Layout, { Content } from 'antd/es/layout/layout';
import AddTodo from '../components/AddTodo'
import { Link } from "react-router-dom";

const { Panel } = Collapse;

const highPriorityDataNotStarted = [
  {
    taskId: '001',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    progress: <Progress percent={0} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>


  },

  {
    taskId: '002',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    progress: <Progress percent={0} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>

  },

];

const mediumPriorityDataNotStarted = [
  {
    taskId: '003',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    progress: <Progress percent={0} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>

  },

  {
    taskId: '004',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    progress: <Progress percent={0} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>


  },

];

const lowPriorityDataNotStarted = [
  {
    taskId: '005',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    progress: <Progress percent={0} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>

  },

  {
    taskId: '006',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    progress: <Progress percent={0} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>

  },

];

const highPriorityDataInProgress = [
  {
    taskId: '001',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    progress: <Progress percent={30} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>

  },

  {
    taskId: '002',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    progress: <Progress percent={30} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>

  },

];

const mediumPriorityDataInProgress = [
  {
    taskId: '003',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    progress: <Progress percent={30} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>

  },

  {
    taskId: '004',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    progress: <Progress percent={30} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>


  },

];

const lowPriorityDataInProgress = [
  {
    taskId: '005',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    progress: <Progress percent={30} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>

  },

  {
    taskId: '006',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    progress: <Progress percent={30} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>

  },

];

const highPriorityDataCompleted = [
  {
    taskId: '001',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    progress: <Progress percent={100} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>

  },

  {
    taskId: '002',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    progress: <Progress percent={100} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>

  },

];

const mediumPriorityDataCompleted = [
  {
    taskId: '003',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    progress: <Progress percent={100} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>

  },

  {
    taskId: '004',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    progress: <Progress percent={100} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>


  },

];

const lowPriorityDataCompleted = [
  {
    taskId: '005',
    taskName: 'Finish App task 1',
    endDate: '2021-09-01',
    progress: <Progress percent={100} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>

  },

  {
    taskId: '006',
    taskName: 'Finish App task 2',
    endDate: '2021-09-01',
    progress: <Progress percent={100} size="small" />,
    actions: <Link to="/subTask"><Button type="primary">Show more</Button></Link>

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


const Todo = () => {
  return (
    <div>
      <Layout>
        <Content >
          <Card>
            <Row>
              <Col span={8} style={{ marginLeft: "1090px" }}>  <AddTodo /></Col>
            </Row>
          </Card>

          {/*Not Started tabs */}
          <Tabs defaultActiveKey="1" centered >
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
