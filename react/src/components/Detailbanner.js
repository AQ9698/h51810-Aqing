import React,{Component} from 'react'
import '../assets/css/Detailbanner.css'
import ReactSwipe from 'react-swipe'


let Detailbanner =({detail})=>(
    // console.log(props),
    <div>
             <ReactSwipe
               className="carousel"
               swipeOptions={{ continuous: true,auto:1000}}
             >
            
<div className="swiper-slide"><img src={detail.ban1} alt=""/></div>
<div className="swiper-slide"><img src={detail.ban2} alt=""/></div>
<div className="swiper-slide"><img src={detail.ban3} alt=""/></div>
             </ReactSwipe>
           </div>
)
export default Detailbanner