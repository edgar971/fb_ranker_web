import React, { Component } from 'react';
import { Layout } from 'antd';
import './style/index.less';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import { receiveData } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const { Content, Footer } = Layout;

class App extends Component {
    state = {
        collapsed: false,
    };
    componentWillMount() {
        const { receiveData } = this.props;
        const user = JSON.parse(localStorage.getItem('user'));
        user && receiveData(user, 'auth');
        this.getClientWidth();
        window.onresize = () => {
            this.getClientWidth();
        }
    }
    getClientWidth = () => {    
        const { receiveData } = this.props;
        const clientWidth = document.body.clientWidth;
        receiveData({isMobile: clientWidth <= 992}, 'responsive');
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const { auth, router, responsive } = this.props;
        return (
            <Layout className="ant-layout-has-sider">
                {!responsive.data.isMobile && <SiderCustom path={this.props.location.pathname} collapsed={this.state.collapsed} />}
              <Layout>
                <HeaderCustom toggle={this.toggle} user={auth.data || {}} router={router} path={this.props.location.pathname} />
                <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                  {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                  Facebook Ranker @ 2017
                </Footer>
              </Layout>
                {
                    responsive.data.isMobile && (   
                        <style>
                        {`
                            #root{
                                height: auto;
                            }
                        `}
                        </style>
                    )
                }
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    const { auth = {data: {}}, responsive = {data: {}} } = state.httpData;
    return {auth, responsive};
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
