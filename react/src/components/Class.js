import React,{Component} from 'react'
import List from './List'
import Listshop from './Listshop'
import {connect} from 'react-redux'
import * as types from '../store/type'
import {asyncActionList,asyncActionList1} from '../store/asyncAction'

class Class extends Component{
    componentDidMount(){
        this.props.getClassList()
        this.props.getClassList1()
    }
    render(){
        return(
            <React.Fragment>
                <List></List>
                <Listshop listshop={this.props.listshop} listshop1={this.props.listshop1} title="热卖选购" title1="女装"></Listshop>
            </React.Fragment>
        )
    }
}
let mapStateToProps=(state)=>({
   listshop:state.listshop,
   listshop1:state.listshop1
})
let mapDispatchToProps=(dispatch)=>({
    getClassList:()=>{asyncActionList(
        './data/class_listshop.json',
        dispatch,
        types.UPDATE_LISTSHOP
    )},
    getClassList1:()=>{asyncActionList1(
        './data/class_listshop1.json',
        dispatch,
        types.UPDATE_LISTSHOP1
    )},
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Class)