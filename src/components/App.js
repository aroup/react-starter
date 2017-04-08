import React, { Component } from 'react';
import Header from './Header';
import '../styles/App.css';
// import AppointmentList from './AppointmentList';
import {Row,Col} from 'antd';
class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <br/>
          <Row>
            <Col span={12}>
              {this.props.children}
            </Col>
          </Row>
          <br/>

      </div>
    );
  }
}

export default App;
