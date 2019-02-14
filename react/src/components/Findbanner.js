import React,{Component} from 'react'
import '../assets/css/find.css'
import ReactSwipe from 'react-swipe'
class Findbanner extends Component{
  constructor(props){
    super(props)
  }
    render(){
        return(
                 <div>
                 <ReactSwipe
                   className="carouselcjy"
                   swipeOptions={{ continuous: true,auto:1000}}
                 >
                 
                
                   <div><div className="swiper-slide"><img src="https://img.alicdn.com/imgextra/i4/2590951958/TB2zg9raUR1BeNjy0FmXXb0wVXa_!!2590951958.jpg" alt=""/></div>
    </div>
                   <div><div className="swiper-slide"><img src="https://img.alicdn.com/imgextra/i2/2590951958/TB2SXZVaqSWBuNjSsrbXXa0mVXa_!!2590951958.jpg" alt=""/></div>
    </div>
                   <div><div className="swiper-slide"><img src="https://img.alicdn.com/imgextra/i1/2590951958/TB2vDs4ax9YBuNjy0FfXXXIsVXa_!!2590951958.jpg" alt=""/></div>
    </div>
                 </ReactSwipe>
               
               </div>
        )
    }
}
export default Findbanner