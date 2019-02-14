import React,{Component} from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import Class from './Class'
import Detail from './Detail'
import Home from './Home'
import Find from './Find'
import Login from './Login'
import Reg from './Reg'
import Buycar from './Buycar'
import Loading from '../common/Loading'
import Errorpage from './Errorpage';
import AuthUser from '../guard/Authuser'
import Listshop from './Listshop'
import {connect} from 'react-redux'
import * as types from '../store/type'
// import {asyncActionNav,asyncActionProduct} from '../store/asyncAction'
import {Route,Redirect,Switch} from 'react-router-dom'
import User from './User';
class App extends Component{
    componentWillReceiveProps(nextProps){ //路由监听
        console.log(nextProps.location.pathname)
        if(this.props.location.pathname!==nextProps.location.pathname){
            let routerPath = nextProps.location.pathname
            if (/home|class/.test(routerPath)){
                this.props.viewNav(true);
                this.props.viewFoot(true);
              }
              if (/login|reg|buycar|detail|user/.test(routerPath)){
                this.props.viewNav(false);
                this.props.viewFoot(false);
              }
              if (/find/.test(routerPath)){
                this.props.viewNav(false);
                this.props.viewFoot(true);
              }
        }
    }
    render(){
        return (
           <>
                {this.props.bloading && <Loading/>}
                {this.props.bNav &&  <Header/>}
                 <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/find" component={Find}/>
                    <Route path="/class" component={Class}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/buycar" component={Buycar}/>
                    {/* <Route path="/listshop" component={Listshop}/> */}
                    <AuthUser path="/user" component={User}/>
                    <Redirect exact from="/" to="/home"/>
                    <Route component={Errorpage}/>
                 </Switch>
                 {this.props.bFoot && <Footer/>}
           </>
          
           
        )
    }
}
let mapStateToProps=(state)=>({
   bloading:state.bloading,
   bFoot:state.bFoot,
   bNav:state.bNav
})
let mapDispatchToProps=(dispatch)=>({
    viewNav:(bl)=>{dispatch({type:types.VIEW_NAV,payload:bl})},
    viewFoot:(bl)=>{dispatch({type:types.VIEW_FOOT,payload:bl})},
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)