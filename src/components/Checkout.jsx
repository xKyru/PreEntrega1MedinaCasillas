import React from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import formatPrice from "../helpers/formatPrice";

import { createOrder, getOrder, getProduct, updateProduct } from "../firebase/firebase";

import { useCartContext } from "../context/CartContext";


const Checkout = () => {
    const { cart, emptyCart, totalPrice } = useCartContext();
    const formulario = React.useRef();
    let navigate = useNavigate();// Ubicación actual del componente


    const handleSumbmit = e => {
        e.preventDefault();
        const formData = new FormData(formulario.current);
        const cliente = Object.fromEntries(formData);
        const clienteValues = Object.values(cliente);
        const correo = document.getElementById("email");
        const confirmarCorreo = document.getElementById("confirmar-email");
        if (clienteValues.includes("")) {
            toast.error("Todos los campos son obligatorios");
        } else if (correo.value != confirmarCorreo.value) {
            toast.error("Los correos electrónicos deben ser iguales.");
        } else {
            const tempCart = cart.map(item => { return { id: item.id } });
            (async () => {
                const ordenCompra = await createOrder(cliente, tempCart, totalPrice(), new Date().toISOString());
                // Descontar Stock
                tempCart.forEach(async (product) => {
                    const currentProduct = await getProduct(product.id);
                    currentProduct.stock -= cart.find(prod => prod.id === product.id).qty;
                    await updateProduct(product.id, currentProduct);
                })
                //Success
                toast.success(`¡Gracias por tu compra! Tu orden de compra ${ordenCompra.id} por un total de ${formatPrice(totalPrice())} fue realizada con exito.`)
                emptyCart();
                e.target.reset();
                navigate("/");//Reedirección a la página principal 
            })();
        }
    }

    return (
        <div className="checkout">
            <div className="container container-sm">
                {
                    cart.length === 0 ?
                        <div className="empty-cart">
                            <h2>Carrito Vacio</h2>
                            <p>Para continuar agrega productos a tu carrito</p>
                            <Link to={`/`} className="empty-cart-btn"><span>Ir a la tienda</span></Link>
                        </div>
                        :
                        <>
                            <h2>Checkout</h2>
                            <form
                                ref={formulario}
                                onSubmit={handleSumbmit}
                                className="checkout-form"
                            >
                                <div className="form-field">
                                    <label htmlFor="nombre">Nombre*</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        id="nombre"
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="email">Correo*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="confirmar-email">Confirmar correo*</label>
                                    <input
                                        type="email"
                                        name="confirmar-email"
                                        id="confirmar-email"
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="telefono">Teléfono*</label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        id="telefono"
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="direccion">Dirección*</label>
                                    <input
                                        type="text"
                                        name="direccion"
                                        id="direccion"
                                    />
                                </div>
                                <div className="form-submit">
                                    <button type="submit" className="submit-btn"><span>Finalizar compra</span></button>
                                </div>
                            </form>
                        </>
                }
            </div>
        </div>

    )
}

export default Checkout