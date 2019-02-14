import React,{Component} from 'react'
import Detailhead from './Detailhead'
import Detailbanner from './Detailbanner'
import Detailfooter from './Detailfooter'
import Detaildetail from '../common/Detaildetail'
import Detailphoto from './Detailphoto'
import QueueAnim from 'rc-queue-anim'
// import querystring from 'query-string'
import * as types from '../store/type'
import connect from "react-redux/es/connect/connect"
import {asyncActionDetail} from '../store/asyncAction'
let zdq=0
class Detail extends Component{
    constructor(props){
        super();
        let id = props.match.params.id;
        var url=`/data/detail.json`;
       console.log(id)
       props.getDetail(url, id)
    //    props.push(id)
       console.log(props.detail)
    }
    componentDidMount(){
        window.scrollTo(0,zdq)
    }
    render(){
        let {detail}=this.props
        console.log(detail.des)
        return(
            <>
                <Detailhead></Detailhead>
                <Detailbanner detail={this.props.detail} ></Detailbanner>
                <Detaildetail detail={this.props.detail} ></Detaildetail>
                <Detailphoto detail={this.props.detail} ></Detailphoto>
                <Detailfooter detail={this.props.detail} ></Detailfooter>
            </>
        )
    }
    componentwillUnmount(){
        zdq=document.documentElement.scrollTop
    }
}
let mapStateToProps= state =>({
    detail:state.detail  //仓库数据
})
let mapDispatchToProps = dispatch =>({
    getDetail:(url,id)=>dispatch(asyncActionDetail({
        url:url, 
        id:id,
        type:types.UPDATE_DETAIL
    })),
    // push:(id) => dispatch({type:types.BUY,payload:id}),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)