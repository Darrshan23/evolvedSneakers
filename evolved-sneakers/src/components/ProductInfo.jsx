const ProductInfo = () => {
    const product = {
        name: 'Laptop',
        price: 1200,
        availability: 'In Stock'
    }

    return (
        <div>
            <h2>Product: {product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Availability: {product.availability}</p>
        </div>
    );
}

export default ProductInfo