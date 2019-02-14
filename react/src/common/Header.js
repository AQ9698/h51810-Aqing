import React from 'react'
import '../assets/css/search.css'
let Header =(props)=>(
    <header className="zyw-header">
    <div className="zyw-container white-color">
        <div className="head-l"><i className="head-l-svg" aria-hidden="true"></i></div>
        <div className="head-search">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="输入您当前要搜索的商品" className="white-color"/>
        </div>
        <div className="head-r"><a href="cart.html"><i className="head-r-svg" aria-hidden="true"></i><i className="head-length">8</i></a></div>
    </div>
</header>
)
export default Header