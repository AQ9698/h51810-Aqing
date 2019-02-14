import React,{Component} from 'react'
let Nav =({nav,dataName})=>(
    <div className="index-class white-bgcolor">
        <div className="weui-flex">
            {
                nav.map((item,index)=>(
                <div className="weui-flex__item" key={index}>
                    <a href="javascript:;">
                        <div className="index-class-img">
                            <img src={item.src} alt=""/>
                        </div>
                        <p className="index-class-text">{item.title}</p>
                    </a>
                </div>
                ))
            }
            {/* <div className="weui-flex__item">
                <a href="javascript:;">
                    <div className="index-class-img">
                        <img src="./img/yqyl.png" alt=""/>
                    </div>
                    <p className="index-class-text">邀请有礼</p>
                </a>
            </div>
            <div className="weui-flex__item">
                <a href="javascript:;">
                    <div className="index-class-img">
                        <img src="./img/cjfl.png" alt=""/>
                    </div>
                    <p className="index-class-text">春节福利</p>
                </a>
            </div>
            <div className="weui-flex__item">
                <a href="javascript:;">
                    <div className="index-class-img">
                        <img src="./img/kbsc.png" alt=""/>
                    </div>
                    <p className="index-class-text">酷币商城</p>
                </a>
            </div>
            <div className="weui-flex__item">
                <a href="javascript:;">
                    <div className="index-class-img">
                        <img src="./img/sjtx.png" alt=""/>
                    </div>
                    <p className="index-class-text">手机通讯</p>
                </a>
            </div>
            <div className="weui-flex__item">
                <a href="javascript:;">
                    <div className="index-class-img">
                        <img src="./img/sjpj.png" alt=""/>
                    </div>
                    <p className="index-class-text">手机配件</p>
                </a>
            </div> */}
        </div>
    </div>
)
// class Nav extends Component{
//     render(){
//         return(
//     <div className="index-class white-bgcolor">
//         <div className="weui-flex">
//             <div className="weui-flex__item">
//                 <a href="javascript:;">
//                     <div className="index-class-img">
//                         <img src="./img/yqyl.png" alt=""/>
//                     </div>
//                     <p className="index-class-text">邀请有礼</p>
//                 </a>
//             </div>
//             <div className="weui-flex__item">
//                 <a href="javascript:;">
//                     <div className="index-class-img">
//                         <img src="./img/cjfl.png" alt=""/>
//                     </div>
//                     <p className="index-class-text">春节福利</p>
//                 </a>
//             </div>
//             <div className="weui-flex__item">
//                 <a href="javascript:;">
//                     <div className="index-class-img">
//                         <img src="./img/kbsc.png" alt=""/>
//                     </div>
//                     <p className="index-class-text">酷币商城</p>
//                 </a>
//             </div>
//             <div className="weui-flex__item">
//                 <a href="javascript:;">
//                     <div className="index-class-img">
//                         <img src="./img/sjtx.png" alt=""/>
//                     </div>
//                     <p className="index-class-text">手机通讯</p>
//                 </a>
//             </div>
//             <div className="weui-flex__item">
//                 <a href="javascript:;">
//                     <div className="index-class-img">
//                         <img src="./img/sjpj.png" alt=""/>
//                     </div>
//                     <p className="index-class-text">手机配件</p>
//                 </a>
//             </div>
//         </div>
//     </div>
//         )
//     }
// }
export default Nav