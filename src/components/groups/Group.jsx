import React, { Component } from 'react';
import { Row, Col, Card} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BreadcrumbCustom from '../BreadcrumbCustom';
import {loadGroup} from '../../action/groupActions';
import GroupPostRankTable from './GroupPostRankTable';

class Group extends Component {
    componentWillMount() {
        const {groupId} = this.props.params;
        this.props.actions.loadGroup(groupId);
    }
    render() {
        return(
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first={this.props.group.name} />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="Top Posts" bordered={false}>
                                <GroupPostRankTable />
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
        actions: bindActionCreators({loadGroup}, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Group);
