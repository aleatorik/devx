import React, { Component } from 'react';
import './CartList.scss';

class CartList extends Component {
    state = {
        priceState: 0
    };

    componentDidMount(){
        const {price} = this.props;

        this.setState({
            priceState: price.substr(1).split('.')[0]
        })
    }

    render() {
        const {id, img, productName, color, size, price, count, index, handleClickCount, handleRemoveClick} = this.props;
        const {priceState} = this.state;

        return (
            <div className="CartListContainer">
                <img className="productImg" src={img}/>
                <div className="productInfo">
                    <p className="productInfoDetail">{productName}</p>
                    <p className="productInfoDetail">{color} / {size}</p>
                    <p className="productInfoDetail">{price}</p>
                </div>
                <div className="productQuantity">
                    <div className="productQuantityCounter">
                        <div onClick={() => handleClickCount(id, "minus")} className="counterEl">ㅡ</div>
                        <div className="counterEl">{count}</div>
                        <div onClick={() => handleClickCount(id, "plus")} className="counterEl">＋</div>
                    </div>
                    <button onClick={() => handleRemoveClick(id)} className="quantityBtn">REMOVE</button>
                </div>
                <div className="totalPrice">{`$${priceState * count}.00`}</div>
            </div>
        );
    }
}

export default CartList;