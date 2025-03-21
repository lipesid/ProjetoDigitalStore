import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";

function ProductListing(props) {
    const [products, setProducts] = useState([]);
    useEffect(function (){
        fetch("http://localhost:3000/products").then(response => response.json())
        .then(body => {
            setProducts(body)
        })
    },[])

    return (
        <div className="flex flex-wrap m-[6px] justify-between">
            {products.slice(0, props.maxNumber).map((product) => {
                return (
                    <ProductCard
                    key={product.id}
                    image={product.images[0]}
                    imagePlaceholder={product.placeholder_image}
                    name={product.name}
                    price={product.price}
                    priceDiscount={product.price_with_discount}
                    slug={product.slug}
                    />
                );
            })}
        </div>
    );
}

export default ProductListing;
