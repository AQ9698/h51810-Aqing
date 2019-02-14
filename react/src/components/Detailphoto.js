import React,{Component} from 'react'
import '../assets/css/Detailhead.css'
let Detailphoto =({detail})=>(
    <div className="item-choose weui-cells mt-625">
    <a className="weui-cell weui-cell_access open-popup" href="javascript:;" data-target="#item_spec">
       <div className="weui-cell__bd">
           <p className="choose-text">选择 <span>颜色分类</span></p>
       </div>
       <div className="weui-cell__ft choose-des">
       </div>
   </a>
   <a className="weui-cell weui-cell_access open-popup" href="javascript:;" data-target="#item_parameter">
       <div className="weui-cell__bd">
           <p className="choose-text">产品参数</p>
       </div>
       <div className="weui-cell__ft choose-des">
       </div>
   </a>
   <div className="item-serve">
       <span><i className="fa fa-check-circle-o theme-color"></i> 品质承诺</span>
       <span><i className="fa fa-check-circle-o theme-color"></i> 七天包退换</span>
       <span><i className="fa fa-check-circle-o theme-color"></i> 如实描述</span>
   </div>
<div className="item-assess weui-cells mb-625">
<a className="weui-cell weui-cell_access" href="javascript:;">
<div className="weui-cell__bd">
   <p className="choose-text">用户评价（<em className="theme-color">0</em>条）</p>
</div>
<div className="weui-cell__ft choose-des">
   100%好评
</div>
</a>
</div>
<div className="item-precent white-bgcolor" id="item-precent">
<h4>图文详情</h4>
<span>
<img src={detail.des1} alt=""/>
<img src={detail.des2} alt=""/>
<img src={detail.des3} alt=""/>
</span>
</div>
</div>
)
export default Detailphoto