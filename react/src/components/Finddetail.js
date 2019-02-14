import React,{Component} from 'react'
import '../assets/css/finddetail.css'
let Finddetail =({findbanner})=>(
        <div class="find-group1-item mb-625 white-bgcolor">
        {
            findbanner.map((item,index)=>(
                <div key={index}>
                    <div class="group1-hd clearfix mb-625">
                <div class="pull-left hd-img"><img src={item.ssrc} alt=""/></div>
                <div class="pull-left">
                    <p class="hd-name">{item.name}</p>
                    <span class="hd-time">{item.time}</span>
                </div>
                <a href="" class="pull-right hd-take">{item.dy}</a>
            </div>
            <div class="group1-bd clearfix">
                <div class="pull-left bd-l">
                    <div class="bd-img"><img src={item.bsrc} alt=""/></div>
                </div>
                <div class="pull-right bd-r">
                    <h4 class="bd-title">
                        {item.title}
                    </h4>
                    <span class="bd-intro">{item.intro}</span>
                </div>
            </div>
                </div>
            ))
        }
        </div>
)
export default Finddetail