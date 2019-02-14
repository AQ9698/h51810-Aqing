import React,{Component} from 'react'
// import {NavLink} from 'react-router-dom'

class List extends Component{
    render(){
        return(
            <section className="zyw-container">
                 <div className="class-cont clearfix">
                 <ul id="myTab" className="nav nav-tabs nav-stacked class-hd">

                    <li className="active"><a href="#nznz" data-toggle="tab">男装女装</a></li>
                    <li><a href="#nxnx" data-toggle="tab">男鞋女鞋</a></li>
                    {/* <li><NavLink activeClassName="active" to="/listshop">男鞋女鞋</NavLink></li>
                    <li><NavLink activeClassName="active" to="/listshop">内衣配饰</NavLink></li> */}
                    <li><a href="#nyps" data-toggle="tab">内衣配饰</a></li>
                    <li><a href="#" data-toggle="tab">箱包手袋</a></li>
                    <li><a href="#" data-toggle="tab">美妆个护</a></li>
                    <li><a href="#" data-toggle="tab">钟表珠宝</a></li>
                    <li><a href="#" data-toggle="tab">手机数码</a></li>
                    <li><a href="#" data-toggle="tab">电脑办公</a></li>
                    <li><a href="#" data-toggle="tab">家用电器</a></li>
                    <li><a href="#" data-toggle="tab">食品生鲜</a></li>
                    <li><a href="#" data-toggle="tab">酒水饮料</a></li>
                    <li><a href="#" data-toggle="tab">医药保健</a></li>
                    <li><a href="#" data-toggle="tab">运动户外</a></li>
                    <li><a href="#" data-toggle="tab">家居厨具</a></li>
                    <li><a href="#" data-toggle="tab">汽车用品</a></li>
                    <li><a href="#" data-toggle="tab">图书音像</a></li>
                </ul>
                 </div>
            </section>
        )
    }
}
export default List