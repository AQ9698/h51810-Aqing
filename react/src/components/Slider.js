import React,{Component} from 'react'
import '../assets/css/slider.css'
import ReactSwipe from 'react-swipe'
class Slider extends Component{
    render(){
        return(
             <div>
             <ReactSwipe
               className="carousell"
               swipeOptions={{ continuous: true,auto:1000}}
             >
               <div><div className="swiper-slide"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4081123835,3981552077&fm=26&gp=0.jpg" alt=""/></div>
</div>
               <div><div className="swiper-slide"><img src="https://img.alicdn.com/imgextra/i4/2590951958/TB2Fz6XfgMPMeJjy1XbXXcwxVXa_!!2590951958.jpg" alt=""/></div>
</div>
               <div><div className="swiper-slide"><img src="https://img.alicdn.com/imgextra/i4/2590951958/TB2ZxVCbjihSKJjy0FeXXbJtpXa_!!2590951958.jpg" alt=""/></div>
</div>
             </ReactSwipe>
           </div>
        )
    }
}
export default Slider