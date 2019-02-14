import * as types from './type'
export let asyncActionNav =(url,dispatch,type)=>{
    dispatch({type:types.VIEW_LOADING,payload:true})
    fetch(
        url
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false})
            dispatch({type:type,payload:data})
        }
    )
};
export let asyncActionList =(url,dispatch,type)=>{
    dispatch({type:types.VIEW_LOADING,payload:true})
    fetch(
        url
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false})
            dispatch({type:type,payload:data})
        }
    )
};
export let asyncActionList1 =(url,dispatch,type)=>{
    dispatch({type:types.VIEW_LOADING,payload:true})
    fetch(
        url
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false})
            dispatch({type:type,payload:data})
        }
    )
};
export let asyncActionBanner =(url,dispatch,type)=>{
    dispatch({type:types.VIEW_LOADING,payload:true})
    fetch(
        url
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false})
            dispatch({type:type,payload:data})
        }
    )
};
export let asyncActionActive =(url,dispatch,type)=>{
    dispatch({type:types.VIEW_LOADING,payload:true})
    fetch(
        url
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false})
            dispatch({type:type,payload:data})
        }
    )
};
export let asyncActionProduct =(url,dispatch,type)=>{
    dispatch({type:types.VIEW_LOADING,payload:true})
    fetch(
        url
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false})
            dispatch({type:type,payload:data})
        }
    )
};
export let asyncActionFindBanner =(url,dispatch,type)=>{
    dispatch({type:types.VIEW_LOADING,payload:true})
    fetch(
        url
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false})
            dispatch({type:type,payload:data})
        }
    )
};
  export let asyncActionDetail=({url,type,id})=>(dispatch,getState)=>{
    dispatch({type:types.VIEW_LOADING,payload:true});
    return fetch(
      url
    ).then(
      res=>res.json()
    ).then(
      data=>{
        // setTimeout(()=>{
          dispatch({type:types.VIEW_LOADING,payload:false});
          dispatch({type:type,payload:data[id-1],id:id});
        // },500)
      }
    );
  };
  export let asyncActionBeginQingQiu=(url,dispatch,type)=>{
    fetch(
      url,
    ).then(
      res=>res.json()
    ).then(
      data=>{
        dispatch({type:types.VIEW_LOADING,payload:false})
        dispatch({type:type,payload:data[0].hasAuth})
      }
    )
    return {type:types.VIEW_LOADING,payload:true};
  };
  

