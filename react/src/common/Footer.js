import React from 'react'
import '../assets/css/footer.css'
import '../assets/css/footerbar.css'
import {NavLink} from 'react-router-dom'
let Footer =(props)=>(
    <footer className="zyw-footer">
    <div className="zyw-container white-bgcolor clearfix">
        <div className="zdq">
            <ul id="zdq">
                <li><NavLink activeClassName="active" to="/home">首页</NavLink></li>
                <li><NavLink activeClassName="active" to="/class">分类</NavLink></li>
                <li><NavLink activeClassName="active" to="/find">发现</NavLink></li>
                <li><NavLink activeClassName="active" to="/buycar">购物车</NavLink></li>
                <li><NavLink activeClassName="active" to="/user">我的</NavLink></li>
            </ul>
        </div>
    </div>
</footer>
)
export default Footer