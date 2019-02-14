import React,{Component} from 'react'
import '../assets/css/banner.css'
let Banner =({banner})=>(
    <section className="zyw-container">
    <div className="index-seckill white-bgcolor">
    <div className="seckill-bd">
    <div className="seckill-wares">
        <div className="swiper-wrapper" >
            <div className="swiper-slide seckill-ware">
                {
                    banner.map((item,index)=>(
                        <a href="item.html" key={index}>
                            <img src={item.src} alt=""/>
                            <p className="red-color">￥<strong>{item.newprice}</strong></p>
                            <del>￥{item.oldprice}</del>
                        </a>
                    ))
                }
            </div>
        </div>
    </div>
</div>
</div>
</section>
)
export default Banner