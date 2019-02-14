import React,{Component} from 'react'
import '../assets/css/login.css'
import {Link} from 'react-router-dom'
class Login extends Component{
    state={
        username:'',
        password:''
    }
    render(){
        return(
            
<section class="zyw-container" style={{marginTop:"45px"}}>
<header class="zyw-header">
    <div class="zyw-container white-color">
        <div class="head-l"><a href="javascript:window.history.back(-1)" target="_self"><img src="img/svg/head-return.svg" alt=""/></a></div>
        <h1>登录</h1>
        <div class="head-r"><Link to="/reg">注册</Link></div>
    </div>
</header>
    <div class="login-img"><img src="img/mylogo.png" alt=""/></div>
    <div class="weui-cells">
        <div class="weui-cell weui-cell_select weui-cell_select-before">
            <div class="weui-cell__hd">
                <select class="weui-select" name="select2">
                    <option value="1">+86</option>
                    <option value="2">+80</option>
                    <option value="3">+84</option>
                    <option value="4">+87</option>
                </select>
            </div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号" onChange={this.changeUserName.bind(this)}/>
            </div>
        </div>
    </div>
    <div class="weui-cells">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <input class="weui-input" type="password" placeholder="请输入密码" onChange={this.changePassWord.bind(this)}/>
            </div>
        </div>
    </div>
    <div class="weui-cells__tips text-right"><a href="">忘记密码？</a></div>
    <div class="login-btn"><a href="javascript:;" class="weui-btn weui-btn_warn theme-bgcolor" onClick={this.goLogin.bind(this)}>登录</a></div>
</section>
        )
    }
    changeUserName(ev){
        this.setState({
            username:ev.target.value
        })
    }
    changePassWord(ev){
        this.setState({
            password:ev.target.value
        })
    }
    goLogin(){
        fetch(
            'http://localhost:3000/ajx?username='+this.state.username + '&password='+this.state.password
        ).then(
            res=>res.json()
        ).then(
            data=>{
                console.log(data)
                switch (data){
                    case 0:
                    alert("用户名或者密码有误");
                    break;
                    case 1:
                    alert("用户名密码为空");
                    break;
                     case 2:
                    alert("登陆成功正在跳转");
                    document.cookie=this.state.username
                    this.props.history.push('/user')   //跨域了 种cookie存数据
                    // this.$router.push({path:'/member',params:{username:username},query:{}})
                    break;
                    default: 

                }
            }
        )
    }
}
export default Login