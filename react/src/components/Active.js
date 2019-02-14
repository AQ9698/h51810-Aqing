import React,{Component} from 'react'
let Active =({active})=>(
    <div className="index-show clearfix">
        <div className="col-sm-12 col-xs-12">
            <a className="sc-gPEVay jZmIRd" href=""><img src="https://s2.juancdn.com/jas/180125/a/0/5a6991598150a12f8a70b929_1080x292.gif" alt=""/></a>
        </div>
        {
            active.map((item,index)=>(
                <div className="col-sm-6 col-xs-6" key={index}>
                    <a className="sc-gPEVay jZmIRd" href=""><img src={item.src} alt=""/></a>
                </div>
            ))
        }
    </div>
)
export default Active