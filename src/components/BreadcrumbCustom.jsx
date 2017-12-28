import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router'
import themes from '../style/theme'

class BreadcrumbCustom extends Component {
    state = {
        theme: null,
        themes: JSON.parse(localStorage.getItem('themes')) || [
            { type: 'info', checked: false },
            { type: 'grey', checked: false },
            { type: 'danger', checked: false },
            { type: 'warn', checked: false },
            { type: 'white', checked: false },
        ],
    }
    componentDidMount() {
        this.state.themes.forEach(val => {
            val.checked && this.setState({
                theme: themes['theme' + val.type] || null
            })
        })
    }
    themeChange = (v) => {
        this.setState({
            themes: this.state.themes.map((t, i) => {
                (t.type === v.type && (t.checked = !t.checked)) || (t.checked = false)
                return t
            }),
            theme: (v.checked && themes['theme' + v.type]) || null
        }, () => {
            localStorage.setItem('themes', JSON.stringify(this.state.themes))
        })
    }
    render() {
        const first = <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item> || ''
        const second = <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item> || ''
        return (
            <span>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item><Link to={'/app/dashboard/index'}>Home</Link></Breadcrumb.Item>
                    {first}
                    {second}
                </Breadcrumb>
                <style>{`
                    ${this.state.theme ?
                        `
                    .custom-theme {
                        background: ${this.state.theme.header.background} !important
                        color: #fff !important
                    }
                    .custom-theme .ant-menu {
                        background: ${this.state.theme.header.background} !important
                        color: #fff !important
                    }
                    .custom-theme .ant-menu-item-group-title {
                        color: #fff !important
                    }
                    ` : ''
                    }
                `}</style>
            </span>
        )
    }
}

export default BreadcrumbCustom
