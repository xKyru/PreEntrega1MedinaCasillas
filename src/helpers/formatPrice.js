const formatPrice = (qty) =>{
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(qty);
}

export default formatPrice;