import React,{Component} from 'react'
import '../assets/css/find.css'
// class Findhead extends Component{
//     render(){
//         return(
//             <header className="zyw-header">
//             <div className="zyw-container white-color">
//                 <div className="head-l"><a href="javascript:window.history.back(-1)" target="_self"><img src="img/svg/head-return.svg" alt=""/></a></div>
//                 <h1>发现好货</h1>
//                 <div className="head-r"></div>
//             </div>
//         </header>
//         )
//     }
// }
let Findhead =({title})=>(
    <header className="zyw-header">
            <div className="zyw-container white-color">
                <div className="head-l"><a href="javascript:window.history.back(-1)" target="_self"><img src="img/svg/head-return.svg" alt=""/></a></div>
                <h1>{title}</h1>
                <div className="head-r"></div>
            </div>
        </header>
)
export default Findhead