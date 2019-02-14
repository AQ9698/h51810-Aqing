import React,{Component} from 'react'
import '../assets/css/Detailhead.css'
class Detailhead extends Component{
    render(){
        return(
            <>
    <header className="zyw-header">
    <div className="zyw-container white-color">
        <div className="head-l"><a href="javascript:window.history.back(-1)" target="_self"><img src="/img/2.png"  alt="" /></a></div>
        <h1><a href="#" className="active">商品</a><a href="#item-precent">详情</a><a href="">评价</a></h1>
        <div className="head-r"><img src="../assets/img/svg/head-more.svg" alt=""/></div>
    </div>
    </header>
            </>
        )
    }
}
export default Detailhead