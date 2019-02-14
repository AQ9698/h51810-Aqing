import React,{Component} from 'react'
import '../assets/css/home.css'
import {Link} from 'react-router-dom'
class User extends Component{
    state={
        username:''
    }
    render(){
        return(
            <section class="zyw-container">
    <div class="home-head white-bgcolor clearfix">
        <div class="head-img">
            <div class="head-logo"><img src="img/mylogo.png" alt=""/></div>
            <div class="head-name">{this.state.username}</div>
            <div class="head-icon">
                {/* <Link ></Link> */}
                <Link href="#" to="/home"><img src="img/svg/home-cog.svg" alt=""/>返回</Link>
                <a href=""><img src="img/svg/home-message.svg" alt=""/></a>
            </div>
        </div>
        <div class="head-cont">
            <div class="weui-flex">
                <div class="weui-flex__item"><a href="star.html"><p>12</p><span>收藏的宝贝</span></a></div>
                <div class="weui-flex__item"><a href="star.html"><p>6</p><span>我的喜欢</span></a></div>
                <div class="weui-flex__item"><a href="star.html"><p>16</p><span>我的足迹</span></a></div>
            </div>
        </div>
    </div>
    <div class="home-cont weui-cells mt-625">
        <a class="weui-cell weui-cell_access" href="order.html">
            <div class="weui-cell__bd">
                <p class="choose-text"><img src="img/svg/home-1.svg" alt=""/> 全部订单</p>
            </div>
            <div class="weui-cell__ft choose-des">
                查看所有已购宝贝
            </div>
        </a>
    </div>
    <div class="weui-flex home-order white-bgcolor mb-625">
        <a href="order.html" class="weui-flex__item">
            <div class="weui-flex__icon">
                <img src="./img/svg/home-dfk.svg" alt=""/>
            </div>
            <p class="weui-flex__label">待付款</p>
        </a>
        <a href="order.html" class="weui-flex__item">
            <div class="weui-flex__icon">
                <img src="./img/svg/home-dfh.svg" alt=""/>
            </div>
            <p class="weui-flex__label">待发货</p>
        </a>
        <a href="order.html" class="weui-flex__item">
            <div class="weui-flex__icon">
                <img src="./img/svg/home-dsh.svg" alt=""/>
            </div>
            <p class="weui-flex__label">待收货</p>
        </a>
        <a href="order.html" class="weui-flex__item">
            <div class="weui-flex__icon">
                <img src="./img/svg/home-dpj.svg" alt=""/>
            </div>
            <p class="weui-flex__label">待评价</p>
        </a>
        <a href="javascript:;" class="weui-flex__item">
            <div class="weui-flex__icon">
                <img src="./img/svg/home-tk.svg" alt=""/>
            </div>
            <p class="weui-flex__label">退款/售后</p>
        </a>
    </div>
    <div class="home-cont weui-cells mb-625">
        <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
                <p class="choose-text"><img src="img/svg/home-2.svg" alt=""/> 酷币</p>
            </div>
            <div class="weui-cell__ft choose-des">
                当前可用酷币30酷币
            </div>
        </a>
        <a class="weui-cell weui-cell_access" href="coupon.html">
            <div class="weui-cell__bd">
                <p class="choose-text"><img src="img/svg/home-3.svg" alt=""/> 优惠券</p>
            </div>
            <div class="weui-cell__ft choose-des">
                2张
            </div>
        </a>
    </div>
    <div class="home-cont weui-cells mb-625">
        <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
                <p class="choose-text"><img src="img/svg/home-4.svg" alt=""/> 我的资料</p>
            </div>
            <div class="weui-cell__ft choose-des">
            </div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
                <p class="choose-text"><img src="img/svg/home-5.svg" alt=""/> 意见反馈</p>
            </div>
            <div class="weui-cell__ft choose-des">
            </div>
        </a>
    </div>
</section>
        )
    }
    componentDidMount(){
        this.setState({
            username:document.cookie
        })
    }
}
export default User