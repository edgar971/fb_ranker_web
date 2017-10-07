import React, { Component } from 'react';
import { Row, Col, Card} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs } from 'antd';
import { Button } from 'antd';

import BreadcrumbCustom from '../BreadcrumbCustom';
import {loadGroup, loadGroupPostReport} from '../../action/groupActions';
import GroupPostRankTable from './GroupPostRankTable';

const TabPane = Tabs.TabPane;

class Group extends Component {

    state = {
        loading: true,
        groupId: 0
    };

    componentWillMount() {
        const {groupId} = this.props.params;
        this.setState({groupId});
        this.props.actions.loadGroup(groupId).then(() => {
            this.setState({loading: false});
        });

        this.props.actions.loadGroupPostReport(groupId);
    }

    goToManagePage = () => {
        this.props.router.push(`app/dashboard/groups/${this.state.groupId}/manage`);
    };

    render() {
        return(
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first={this.props.group.name} />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card loading={this.state.loading}
                                  title="Ranking"
                                  bordered={false}
                                  extra={<Button type="primary" icon="tool" onClick={this.goToManagePage} >Manage Pages</Button>}
                            >

                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="Top Post" key="1">
                                        <GroupPostRankTable report={this.props.group.posts_report} />
                                    </TabPane>
                                    <TabPane tab="New Fans" key="2">
                                        <GroupPostRankTable />
                                    </TabPane>
                                    <TabPane tab="Posting Strategy" key="3">
                                        <GroupPostRankTable />
                                    </TabPane>
                                </Tabs>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        group: state.group
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({loadGroup, loadGroupPostReport}, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Group);
