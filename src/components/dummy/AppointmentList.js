// import React,{Component} from 'react';
// import Appointment from './Appointment';
// import {connect} from 'react-redux';
//
// class AppointmentList extends Component{
//   render(){
//     var i=0;
//     if(this.props.appointments.length>0){
//       var Listed = this.props.appointments.map((appointment)=>{
//         return (
//           <Appointment key={i++} appointment={appointment}/>
//         );
//       });
//       return(
//         <ul>{Listed}</ul>
//       )
//     }
//     else {
//       return (<div>  <h2>Nothing in the list</h2> </div>);
//     }
//   }
// }
//
// function mapStateToProps(state,ownProps){
//   return {
//     appointments : state.appointments
//   };
// }
//
// export default connect(mapStateToProps)(AppointmentList);
