import * as types from './type'
let reducer = (state,action)=>{
    console.log("之后的数据",state)
    let {type,payload}=action
    switch(type){
        case types.VIEW_NAV:
        return Object.assign({},state,{ 
            bNav:payload
        })
        case types.VIEW_FOOT:
        return Object.assign({},state,{
            bFoot:payload
        })
        case types.VIEW_LOADING:
        return Object.assign({},state,{
            bLoading:payload
        })
        case types.UPDATE_HOME:
        return Object.assign({},state,{
            home:payload
        })
        case types.UPDATE_HOME_PRODUCT:
        return Object.assign({},state,{
            homeproduct:payload
        })
        case types.UPDATE_DETAIL:
        return Object.assign({},state,{
            detail:payload
        })
        case types.UPDATE_HOME_BANNER:
        return Object.assign({},state,{
            homebanner:payload
        })
        case types.UPDATE_HOME_ACTIVE:
        return Object.assign({},state,{
            active:payload
        })
        case types.UPDATE_LISTSHOP:
        return Object.assign({},state,{
            listshop:payload
        })
        case types.UPDATE_LISTSHOP1:
        return Object.assign({},state,{
            listshop1:payload
        })
        case types.UPDATE_FIND_BANNER:
        return Object.assign({},state,{
            findbanner:payload
        })
        default:
         return state
    }
}
export default reducer