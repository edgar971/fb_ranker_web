import React from 'react';
import { Row, Col, Card} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BreadcrumbCustom from '../BreadcrumbCustom';
import GroupsTable from '../groups/GroupsTable';
import * as groupActions from '../../action/groupActions';
import AddGroupModalForm from '../groups/AddGroupModalForm';

class Dashboard extends React.Component {
    state = {
        loading: true
    };

    componentWillMount() {
        this.props.actions.loadGroups().then(() => {
           this.setState({ loading: false });
        });
    }
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="Groups" bordered={false} loading={this.state.loading}>
                                <AddGroupModalForm addGroup={this.props.actions.addGroup} loadGroups={this.props.actions.loadGroups} />
                                <GroupsTable groups={this.props.groups} />
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
        groups: state.groups
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(groupActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
