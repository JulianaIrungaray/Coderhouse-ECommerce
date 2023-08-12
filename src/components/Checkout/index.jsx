import React, { useContext, useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css';

export const Checkout = () => {
    const [orderId, setOrderId] = useState();
    const [buyer, setBuyer] = useState({
        NombreCompleto: "",
        Email: "",
        EmailConfirmacion: "",
        Telefono: "",
        Direccion: "",
    });
    const { NombreCompleto, Email, EmailConfirmacion, Telefono, Direccion } = buyer;
    const { cart } = useContext(CartContext);

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const total = cart.reduce((acum, unItem) => acum + (unItem.price * unItem.cant), 0);
        const dia = new Date();
        const data = { buyer, cart, total, dia };
        generateOrder(data);
    };

    const generateOrder = async (data) => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "Orders");
        const order = await addDoc(queryCollection, data);
        setOrderId(order.id);
    };

    return (
        <div className="checkout-container">
            <h1>Formulario</h1>
            <hr />
            {!orderId && (
                <form className="compraForm" onSubmit={handleSubmit}>
                    <label>Nombre Completo</label>
                    <input
                        type="text"
                        name="NombreCompleto"
                        placeholder="Nombre Completo"
                        pattern="[A-Za-z\s]+"
                        value={NombreCompleto}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        value={Email}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Confirmar Email</label>
                    <input
                        type="email"
                        name="EmailConfirmacion"
                        placeholder="Confirmar Email"
                        value={EmailConfirmacion}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Teléfono</label>
                    <input
                        type="tel"
                        name="Telefono"
                        placeholder="Teléfono"
                        pattern="[0-9]{10,12}"
                        value={Telefono}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Dirección</label>
                    <input
                        type="text"
                        name="Direccion"
                        placeholder="Dirección"
                        value={Direccion}
                        onChange={handleInputChange}
                        required
                    />
                    <button className="purchaseButton" type="submit">Confirmar Compra</button>
                </form>
            )}
            {orderId && (
                <div>
                    <h1>Felicitaciones tu compra se realizó con éxito</h1>
                    <p>Te enviamos un email con un link a esta página, para que puedas seguir la entrega de tu compra.</p>
                    <h3>Tu ID de compra es: {orderId}</h3>
                    <h2>¡Gracias por confiar en nosotros!</h2>
                    <Link to='/'> 
                         <button className='seguirComprandoButton'>Seguir Comprando</button>
                    </Link>
                </div>
            )}
        </div>
    );
};
