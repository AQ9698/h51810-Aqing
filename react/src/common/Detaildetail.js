import React,{Component} from 'react'
import '../assets/css/Detailhead.css'
import QueueAnim from 'rc-queue-anim';
let Detaildetail =({detail})=>(
    <QueueAnim className="item-details white-bgcolor clearfix" leaveReverse={true} type={['right','left']}>
        <h3 className="details-title">{detail.Ptitle}</h3> 
         <strong className="details-prince theme-color pull-left">￥{detail.prince}</strong>
        <span className="details-volume pull-right">月销:1028件</span>
    </QueueAnim>
)
export default Detaildetail