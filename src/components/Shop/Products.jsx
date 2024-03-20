import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = () => {

    const products = [{
        id: "1",
        title: "Product 1",
        price: 6,
        description: "Product description"
    },
    {
        id: "2",
        title: "Product 2",
        price: 6,
        description: "Product description"
    }
    ]
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {products.map((product) => {
                    return <ProductItem key={product.id} id={product.id} title={product.title} price={product.price} description={product.description} />
                })}
            </ul>
        </section>
    );
};

export default Products;
