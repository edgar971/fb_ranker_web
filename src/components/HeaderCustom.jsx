import React, { Component } from 'react'
import { Menu, Icon, Layout, Popover } from 'antd'
import { gitOauthToken, gitOauthInfo } from '../axios'
import { queryString } from '../utils'
import avatar from '../style/imgs/b1.jpg'
import SiderCustom from './SiderCustom'
import { connect } from 'react-redux'
const { Header } = Layout
const SubMenu = Menu.SubMenu

class HeaderCustom extends Component {
    state = {
        user: '',
        visible: false,
    }
    componentDidMount() {
        const QueryString = queryString()
        // if (QueryString.hasOwnProperty('code')) {
        //     console.log(QueryString)
        //     const _user = JSON.parse(localStorage.getItem('user'))
        //     !_user && gitOauthToken(QueryString.code).then(res => {
        //         console.log(res)
        //         gitOauthInfo(res.access_token).then(info => {
        //             this.setState({
        //                 user: info
        //             })
        //             localStorage.setItem('user', JSON.stringify(info))
        //         })
        //     })
        //     _user && this.setState({
        //         user: _user
        //     })
        // }
        const _user = JSON.parse(localStorage.getItem('user')) || '测试'
        if (!_user && QueryString.hasOwnProperty('code')) {
            gitOauthToken(QueryString.code).then(res => {
                gitOauthInfo(res.access_token).then(info => {
                    this.setState({
                        user: info
                    })
                    localStorage.setItem('user', JSON.stringify(info))
                })
            })
        } else {
            this.setState({
                user: _user
            })
        }
    }
    menuClick = e => {
        console.log(e)
        e.key === 'logout' && this.logout()
    }
    logout = () => {
        localStorage.removeItem('user')
        this.props.router.push('/login')
    }
    popoverHide = () => {
        this.setState({
            visible: false,
        })
    }
    handleVisibleChange = (visible) => {
        this.setState({ visible })
    }
    render() {
        const { responsive, path } = this.props
        return (
            <Header style={{ background: '#fff', padding: 0, height: 65 }} className="custom-theme" >
                {
                    responsive.data.isMobile ? (
                        <Popover content={<SiderCustom path={path} popoverHide={this.popoverHide} />} trigger="click" placement="bottomLeft" visible={this.state.visible} onVisibleChange={this.handleVisibleChange}>
                            <Icon type="bars" className="trigger custom-trigger" />
                        </Popover>
                    ) : (
                        <Icon
                            className="trigger custom-trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.props.toggle}
                        />
                    )
                }
                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                    onClick={this.menuClick}
                >
                    <SubMenu title={<span className="avatar"><img src={avatar} alt="User" /><i className="on bottom b-white" /></span>} />
                </Menu>
                <style>{`
                    .ant-menu-submenu-horizontal > .ant-menu {
                        width: 120px
                        left: -40px
                    }
                `}</style>
            </Header>
        )
    }
}

const mapStateToProps = state => {
    const { responsive = {data: {}} } = state.httpData
    return {responsive}
}

export default connect(mapStateToProps)(HeaderCustom)