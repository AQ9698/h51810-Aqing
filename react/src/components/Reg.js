import React,{Component} from 'react'
import '../assets/css/login.css'
import {Link} from 'react-router-dom'
class Reg extends Component{
    state={
        username:'',
        password:''
    }
    render(){
        return(
<body>
<header class="zyw-header">
    <div class="zyw-container white-color">
        <div class="head-l"><a href="javascript:window.history.back(-1)" target="_self"><img src="img/svg/head-return.svg" alt=""/></a></div>
        <h1>注册</h1>
        <div class="head-r"><Link to="/login">登陆</Link></div>
    </div>
</header>
<section class="zyw-container" style={{marginTop:"45px"}}>
    <div class="weui-cell mt-2">
        <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号" onChange={this.getUsername.bind(this)}/>
        </div>
    </div>
    <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd">
            <label class="weui-label">验证码</label>
        </div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="tel" placeholder="请输入验证码"/>
        </div>
        <div class="weui-cell__ft">
            <button class="weui-vcode-btn theme-color">获取验证码</button>
        </div>
    </div>
    <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="password" placeholder="输入密码" onChange={this.getPassword.bind(this)}/>
        </div>
    </div>
    <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">确认密码</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="password" placeholder="确认密码"/>
        </div>
    </div>
    <label for="weuiAgree" class="weui-agree">
        <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox"/>
        <span class="weui-agree__text">
        阅读并同意<a href="javascript:void(0);">《相关条款》</a>
      </span>
    </label>
    <div class="login-btn"><a href="javascript:;" class="weui-btn weui-btn_warn theme-bgcolor" onClick={this.goRegister.bind(this)}>注册</a></div>
</section>
</body>
        )
    }
    getUsername(ev){
        this.setState({
            username:ev.target.value
        })
    }
    getPassword(ev){
        this.setState({
            password:ev.target.value
        })
    }
    goRegister(){
        fetch(
            'http://localhost:3000/regs?username='+ this.state.username + '&password='+this.state.password
        ).then(
            res=>res.json()
        ).then(
            data=>{
                console.log(data)
                // if(data.error == 0){
                //     alert('注册成功')
                //     // this.$router.push('./login')
                //     this.props.history.push('/login')
                // }else if(data.error==1){
                //     alert('注册失败，请重新注册')
                // }
                switch (data){
                    case 0:
                    alert("该用户名已存在");
                    break;
                    case 1:
                    alert("注册成功马上跳转到登陆页面");
                    this.props.history.push('/login')
                    default:
                }
            }
        )
    }
}
export default Reg