import './ProductItem.css'
import {Link} from "react-router-dom";

export const ProductItem = ({id, model, description, price, media}) => {
    return (
        <Link to={`/product/${id}`} className={'product-item'}>
            <div className={'product-image'}>
                <img src={media[0]} alt={`${model} - ${description}`} />
            </div>
            <div className={'product-content'}>
                <h2 className={'product-title'}>{model}</h2>
                <p className={'product-price'}>From: {price}</p>
                <p>{description}</p>
            </div>
        </Link>
    )
}
