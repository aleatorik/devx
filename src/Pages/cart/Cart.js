import React, { Component } from 'react';
import CartList from './component/CartList';
import Nav from '../../Components/nav/Nav';
import Footer from '../../Components/footer/Footer';
import List from './data.json';
import './Cart.scss';

class Cart extends Component {
    state = {
        cartList: [],
        totalPrice: 0
    };

    componentDidMount(){
        const list = List.product;

        this.setState({
            cartList: list,
            totalPrice: list.reduce((total, el) => total += (el.count * el.price.substr(1).split('.')[0]), 0)
        });
    }

    handleClickCount = (index, str) => {
        if(str.includes("plus")){
            const selectedObj = this.state.cartList.find(el => el.id === index);
            selectedObj.count++;
    
            const arrCopy = [ ...this.state.cartList ];
            arrCopy[index] = selectedObj;
    
            this.setState({ 
                cartList: arrCopy,
                totalPrice: arrCopy.reduce((total, el) => total += (el.count * el.price.substr(1).split('.')[0]), 0)
            });
        }
        else{
            const selectedObj = this.state.cartList.find(el => el.id === index);

            if(selectedObj.count > 0){
                selectedObj.count--;
            }
    
            const arrCopy = [ ...this.state.cartList ];
            arrCopy[index] = selectedObj;
    
            this.setState({ 
                cartList: arrCopy,
                totalPrice: arrCopy.reduce((total, el) => total += (el.count * el.price.substr(1).split('.')[0]), 0)
            });
        }
    }

    handleRemoveClick = (index) => {
        this.setState({
            cartList: this.state.cartList.filter(el => el.id !== index)
        })
    }
    
    render() {
        const {totalPrice} = this.state;

        return (
            <>
            <div className="Cart">
                <Nav />
                <div className="cartContainer">
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
                            <CartList key={index} handleClickCount={this.handleClickCount} handleRemoveClick={this.handleRemoveClick} {...el}/>
                        )}
                    </div>
                    <div className="totalContainer">
                        <div className="txtTotalPrice">{`TOTAL: $${totalPrice}.00`}</div>
                        <div className="shipping">Shipping & taxes calculated at checkout</div>
                        <div className="totalBtnContainer">
                            <button className="btnCheckout">CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
        );
    }
}

export default Cart;