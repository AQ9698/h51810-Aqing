import React,{Component} from 'react'
import '../assets/css/nznz.css'
let Listshop =({listshop,title,title1,listshop1})=>(
    <div id="myTabContent" className="tab-content class-bd white-bgcolor">
    <div className="tab-pane fade in active" id="nznz">
    <div className="class-bd-cont">
        <div className="bd-box">
            <h4 className="bd-box-title">{title}</h4>
            <div className="bd-box-info">
                <div className="row">
                    {
                        listshop.map((item,index)=>(
                        <div className="col-xs-4 info-item" key={index}>
                            <img src={item.src} alt=""/>
                            <p>{item.name}</p>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className="bd-box">
            <h4 className="bd-box-title">{title1}</h4>
            <div className="bd-box-info">
                <div className="row">
                    {
                        listshop1.map((item,index)=>(
                        <div className="col-xs-4 info-item" key={index}>
                            <img src={item.src} alt=""/>
                            <p>{item.name}</p>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className="bd-box">
            <h4 className="bd-box-title">童装</h4>
            <div className="bd-box-info">
                <div className="row">
                    <div className="col-xs-4 info-item">
                        <img src="https://img12.360buyimg.com/focus/jfs/t11257/255/2211172737/8332/3ef32977/5a12448aN04e0b987.jpg" alt=""/>
                        <p>品质童装</p>
                    </div>
                    <div className="col-xs-4 info-item">
                        <img src="https://img12.360buyimg.com/focus/jfs/t12442/247/704086578/7163/f0b3677d/5a12447fNd3894b27.jpg" alt=""/>
                        <p>套装</p>
                    </div>
                    <div className="col-xs-4 info-item">
                        <img src="https://img10.360buyimg.com/focus/jfs/t13756/13/712950885/7910/6346b45/5a124475Nb3b9efd6.jpg" alt=""/>
                        <p>裙子</p>
                    </div>
                    <div className="col-xs-4 info-item">
                        <img src="https://img12.360buyimg.com/focus/jfs/t11635/258/2210764394/12510/66bd58cf/5a12445bN917f40bb.jpg" alt=""/>
                        <p>亲子装</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
)
export default Listshop