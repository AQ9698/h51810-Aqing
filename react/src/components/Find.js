import React,{Component} from 'react'
import '../assets/css/find.css'
import Findhead from './Findhead'
import Findbanner from './Findbanner';
import Finddetail from './Finddetail'
import {connect} from 'react-redux'
import * as types from '../store/type'
import {asyncActionFindBanner} from '../store/asyncAction'
let cjy=0
class Find extends Component{
    componentDidMount(){
        this.props.getFindBanner()
        window.scrollTo(0,cjy)
    }
    render(){
        return(
            <>
                 <Findhead title="发现好货"></Findhead>
                <Findbanner></Findbanner>
                <Finddetail findbanner={this.props.findbanner}></Finddetail>
            </>
        )
    }
    componentwillUnmount(){
        cjy=document.documentElement.scrollTop
    }
}
let mapStateToProps=(state)=>({
    findbanner:state.findbanner
})
let mapDispatchToProps=(dispatch)=>({
    getFindBanner:()=>{asyncActionFindBanner(
        './data/find_banner.json',
        dispatch,
        types.UPDATE_FIND_BANNER
    )},
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Find)