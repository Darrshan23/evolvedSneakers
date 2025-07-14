const ProductList = () => {
    const products = [
        {
            id: 1,
            name: "Phone",
            price: "$100"
        },
        {
            id: 2,
            name: "Laptop",
            price: "$750"
        },
        {
            id: 3,
            name: "Earphone",
            price: "$49"
        }
    ]

    return (
        <div>
            {products.map(({id, name, price})=>(
                <ul key={id}>
                    <li>{name}</li>
                    <li>{price}</li>
                </ul>
            ))}
        </div>
    );
}

export default ProductList