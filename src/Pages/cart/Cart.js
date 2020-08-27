import React, { Component } from 'react';
import CartList from './component/CartList';
import './Cart.scss';
import List from './data.json';

class Cart extends Component {
    state = {
        cartList: []
    };

    componentDidMount(){
        this.setState({cartList: List.product});
    }

    handleClick = (index, str) => {
        if(str.includes("plus")){
            const selectedObj = this.state.cartList.find(el => el.id === index);
            selectedObj.count++;
    
            const arrCopy = [ ...this.state.cartList ];
            arrCopy[index] = selectedObj;
    
            this.setState({ cartList: arrCopy });
        }
        else{
            const selectedObj = this.state.cartList.find(el => el.id === index);

            if(selectedObj.count > 0){
                selectedObj.count--;
            }
    
            const arrCopy = [ ...this.state.cartList ];
            arrCopy[index] = selectedObj;
    
            this.setState({ cartList: arrCopy });
        }
    }

    handleRemoveClick = () => {
        
    }
    
    render() {
        return (
            <div className="CartContainer">
                <div className="txtCartContainer">
                    <div className="txtCart">CART</div>
                </div>
                <div className="txtContainer">
                    <span className="txtProduct">PRODUCT</span>
                    <span></span>
                    <span className="txtQuantity">QUANTITY</span>
                    <span className="txtTotal">TOTAL</span>
                </div>
                <div className="cartListContainer">
                    {this.state.cartList.map((el, index) => 
                        <CartList key={index} img={el.img} productName={el.productName} size={el.size} price={el.price} index={index} count={el.count} handleClick={this.handleClick} />
                    )}
                </div>
                <div className="totalContainer">
                    <div className="txtTotalPrice">TOTAL: $100.00</div>
                    <div className="shipping">Shipping & taxes calculated at checkout</div>
                    <div className="totalBtnContainer">
                        <button className="btnCheckout">CHECKOUT</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;