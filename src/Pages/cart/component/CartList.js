import React, { Component } from 'react';
import './CartList.scss';

class CartList extends Component {
    render() {
        const {img, productName, size, price, index, count, handleClick} = this.props;

        return (
            <div className="CartListContainer">
                <img className="productImg" src={img}/>
                <div className="productInfo">
                    <p className="productInfoDetail">{productName}</p>
                    <p className="productInfoDetail">{size}</p>
                    <p className="productInfoDetail">{price}</p>
                </div>
                <div className="productQuantity">
                    <div className="productQuantityCounter">
                        <div onClick={() => handleClick(index, "minus")} className="counterEl">ㅡ</div>
                        <div className="counterEl">{count}</div>
                        <div onClick={() => handleClick(index, "plus")} className="counterEl">＋</div>
                    </div>
                    <button className="quantityBtn">REMOVE</button>
                </div>
                <div className="totalPrice">$20.00</div>
            </div>
        );
    }
}

export default CartList;