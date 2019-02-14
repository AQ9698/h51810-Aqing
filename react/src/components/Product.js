import React,{Component} from 'react'
import {Link} from 'react-router-dom'

import '../assets/css/product.css'
let Product =({product,dataName})=>(
    <div className="index-wares" >
        <div className="wares-title"><img src="http://gw.alicdn.com/tfs/TB1Aw9JSVXXXXXQXXXXXXXXXXXX-1500-68.png" alt=""/></div>
        <div className="wares-cont">
            <ul className="clearfix">
                {
                    product.map((item,id)=>(
                        <li className="col-sm-6 col-xs-6 ware-box" key={id}>
                            <Link to={{pathname:'./detail/'+item.id,
                                        // search:querystring.stringify({dataName:dataName})
                        }}>
                                <div className="ware-img">
                                    <img src={item.Psrc} alt=""/>
                                    <span className="ware-vip">{item.VIP}</span>
                                </div>
                                <h3 className="ware-title">{item.Ptitle}</h3>
                                <p className="ware-des">{item.des}</p>
                                <span className="ware-prince red-color">￥{item.prince}</span>
                            </Link>
                    </li>
                    ))
                }
            </ul>
        </div>
    </div>
)
export default Product