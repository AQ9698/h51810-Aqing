import React,{Component} from 'react'
import Slider from './Slider'
import Nav from './Nav'
import Banner from './Banner'
import Active from './Active'
import Product from './Product'
import {connect} from 'react-redux'
// import QueueAnim from 'rc-queue-anim'
import {asyncActionNav,asyncActionProduct,asyncActionBanner,asyncActionActive} from '../store/asyncAction'
import * as types from '../store/type'
let cjy=0;
class Home extends Component{
    componentDidMount(){
        this.props.getHomeNav()
        this.props.getHomeProduct()
        this.props.getHomeBanner()
        this.props.getHomeActive()
        window.scrollTo(0,cjy)
    }
    render(){
        return(
            <React.Fragment>
               
                <Slider></Slider>
                <Nav nav={this.props.home} dataName="home" key="nav"></Nav>
                <Banner banner={this.props.homebanner} dataName="homebanner" key="ban"></Banner>
                <Active active={this.props.active} key="act"></Active>
                <Product product={this.props.homeproduct} dataName="homeproduct" key="pro"></Product>
           </React.Fragment>
        )
    }
    componentwillUnmount(){
        cjy=document.documentElement.scrollTop
    }
}
let mapStateToProps=(state)=>({
    home:state.home,
    homebanner:state.homebanner,
    homeproduct:state.homeproduct,
    active:state.active
})
let mapDispatchToProps=(dispatch)=>({
    getHomeNav:()=>{asyncActionNav(
        './data/home_nav.json',
        dispatch,
        types.UPDATE_HOME
    )},
    getHomeBanner:()=>{asyncActionBanner(
        './data/home_banner.json',
        dispatch,
        types.UPDATE_HOME_BANNER,
    )},
    getHomeProduct:()=>{asyncActionProduct(
        './data/home_product.json',
        dispatch,
        types.UPDATE_HOME_PRODUCT
    )},
    getHomeActive:()=>{asyncActionActive(
        './data/home_active.json',
        dispatch,
        types.UPDATE_HOME_ACTIVE
    )}
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)