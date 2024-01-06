import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropDownContainer, CartItems, ButtonM, EmptyMessage } from './cart-dropdown.styles.jsx'
import { Link, useNavigate } from 'react-router-dom';



const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )}
            </CartItems>
            <ButtonM buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>GO TO CHECKOUT</ButtonM>
        </CartDropDownContainer>
    )
}

export default CartDropdown;