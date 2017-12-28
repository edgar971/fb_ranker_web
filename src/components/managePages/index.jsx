import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BreadcrumbCustom from '../BreadcrumbCustom'
import { loadGroupPages, loadGroup, attachPageToGroup } from '../../actions/groupActions'
import { fetchSearchResults } from './actions'
import ManagePagesTable from './ManagePagesTable'
import PageSearch from './pageSearch'

class ManagePages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            groupId: 0
        }

        this.onPageSearchSelect = this.onPageSearchSelect.bind(this)
    }

    componentWillMount() {
        const { groupId } = this.props.params
        this.setState({ groupId })
        this.props.actions.loadGroup(groupId)
        this.props.actions.loadGroupPages(groupId).then(() => {
            this.setState({ loading: false })
        })
    }

    onPageSearchSelect(pageId) {
        this.setState({ loading: true })
        const { groupId } = this.props.params
        this.props.actions.attachPageToGroup(groupId, pageId).then(() => {
            this.props.actions.loadGroupPages(groupId).then(() => {
                this.setState({ loading: false })
            })
        })
    }

    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first={this.props.group.name} second="Manage Group" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={16}>
                        <div className="gutter-box">
                            <Card loading={this.state.loading} title="Manage Pages" bordered={false} >
                                <ManagePagesTable pages={this.props.group.pages} />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card title="Track a new Page" bordered={false}>
                                <PageSearch results={this.props.pageSearchResults} actions={this.props.actions} onSelect={this.onPageSearchSelect} />
                            </Card>
                        </div>
                    </Col>

                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { pageSearchResults, group } = state
    return {
        pageSearchResults,
        group
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ loadGroupPages, loadGroup, fetchSearchResults, attachPageToGroup }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePages)
