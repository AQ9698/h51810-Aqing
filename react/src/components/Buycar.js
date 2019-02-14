import React,{Component} from 'react'
import '../assets/css/cart.css'
import '../assets/css/buycar.css'
class Buycar extends Component{
    render(){
        return(
<form method="post" name="cart_form" target="_self" id="cart_form" action="">
<header className="zyw-header">
    <div className="zyw-container white-color">
        <div className="head-l"><a href="javascript:window.history.back(-1)" target="_self"><img src="img/svg/head-return.svg" alt=""/></a></div>
        <h1>购物车</h1>
        <div className="head-r"><a href="">编辑</a></div>
    </div>
</header>
<section class="zyw-container">
    <div class="commodity_list_box">
    <div class="commodity_box">
                <div class="commodity_list">
                
                    <div class="tite_tim select">
                        <em aem="1" cart_id="84"></em>
                        <span>Apple产品专营店</span>
                        <div class="clear"></div>
                    </div>
                    
                    <ul class="commodity_list_term">
                        <li class="select">
                            <em aem="0" cart_id="84"></em>
                            <img src="https://img13.360buyimg.com/mobilecms/s140x140_jfs/t3229/10/2021133198/376218/cfcc06cb/57d8e84eNfe92eae8.jpg"/>
                            <div class="div_center">
                                <h4>新疆苹果</h4>
                                <span>50斤</span>
                                <p class="now_value">
                                    <i>￥</i>
                                    <b class="qu_su">123.00</b>
                                </p>
                            </div>
                            <div class="div_right">
                                <i onclick="reducew(this)">-</i>
                                <span class="zi">1</span>
                                <input type="hidden" value="84"/>
                                <i onclick="plusw(this)">+</i>
                            </div>
                        </li>
                    </ul>
                
                    <div class="shop_ul_bottom account_info_box">
                        <ul class="account_info">
                            <li class="i_text">
                                <span class="info_name xi_cu">包邮</span>
                                <span class="info_name">七天无理由退货</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
</section>
<footer class="zyw-footer">
    <div class="zyw-container white-bgcolor">
        <div class="settle_box">
            <dl class="all_check select">
                <dt>
                   
                </dt>
            </dl>
            <dl class="total_amount">
                <dt>
                    <p id="total_price">
                    合计：¥<b>0</b>
                    </p>
                </dt>
                <dd>不含运费</dd>
            </dl>
            <input type="hidden" name="gcs" id="gcs"/>
            <a class="settle_btn" href="javascript:void(0);" id="confirm_cart">去结算</a>
        </div>
    </div>
</footer>
</form>
        )
    }
}
export default Buycar