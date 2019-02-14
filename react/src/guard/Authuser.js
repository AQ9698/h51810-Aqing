import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as types from '../store/type'
import {asyncActionBeginQingQiu} from '../store/asyncAction'
let AuthUser=({component:Component, auth, userData,  ...rest})=>(
  <Route {...rest} render={(props)=>{
    // auth ?
    // <Component {...props} userData={userData} /> ://数据预载
    // <Redirect to="/login"/>
    if(document.cookie.length==0){
      alert("您还位登陆，马上跳转登陆")
    }
    return(
      document.cookie.length > 0 ?
      <Component {...props} />://数据预载
      <Redirect to="/login" />
    )
  }}/>
);
// class AuthUser extends React.Component{
//   render()
// }
let mapStateToProps=(state)=>({
    auth:state.user.auth,
    userData:state.user.userData,
    hasAuth: state.hasAuth
})
let mapDispatchToProps=(dispatch)=>({
     beginQingqiu:()=>{
      dispatch(asyncActionBeginQingQiu(
        '/data/user.json',
        dispatch,
        types.HASUSER
    ))
     }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthUser)