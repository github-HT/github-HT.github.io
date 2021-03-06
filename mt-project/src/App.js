import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route } from 'react-router';
import Home from './pages/home/Home';
import { createBrowserHistory } from 'history';
import { Layout, Menu, Breadcrumb } from 'antd';
import CustomHeader from './pages/layout/CustomHeader';

const { Content, Footer } = Layout;

function App() {
  const history = createBrowserHistory()
  return (

    <Layout>
      <CustomHeader/>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Router history={history}>
            <Route path="/" component={Home} />
          </Router>
        </div>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>

  );
}

export default App;
