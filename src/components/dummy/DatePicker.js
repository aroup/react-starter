// import { DatePicker } from 'antd';
// import React , {Component} from 'react';
// import {Input} from 'antd';
// import {Button} from 'antd';
// import * as appointmentActions from '../actions/appointmentActions';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {Row,Col} from 'antd';
//
// class Datepicker extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       name : '',
//       date : ''
//     }
//   }
//   onOk = (value)=>{
//     this.setState({
//       date: value
//     })
//   }
//   onChange=(e)=>{
//     console.log(e.target.value);
//     this.setState({
//       name : e.target.value
//     })
//   }
//   onClick=()=>{
//     console.log(this.state);
//     this.props.actions.addAppointment(this.state);
//   }
//   render(){
//     return(
//       <div>
//         <Row>
//           <Col span={1}>
//           </Col>
//           <Col span={12}>
//             <Input size="large" placeholder="Enter Text" onChange={this.onChange} />
//           </Col>
//           <Col span={11}>
//           </Col>
//         </Row>
//         <br/>
//         <Row>
//           <Col span={1}>
//           </Col>
//           <Col span={5}>
//             <DatePicker
//               showTime
//               format="YYYY-MM-DD HH:mm:ss"
//               placeholder="Select Time"
//               onOk={this.onOk}
//             />
//           </Col>
//         <Col span={1}>
//         </Col>
//         <Col span={10}>
//           <Button type="primary" onClick={this.onClick}> Add Appointment </Button>
//         </Col>
//         </Row>
//       </div>
//     )
//   }
// }
//
//
// function mapDispatchToProps(dispatch){
//   return {
//     actions : bindActionCreators(appointmentActions,dispatch)
//   };
// }
//
// export default connect(null,mapDispatchToProps)(Datepicker);
