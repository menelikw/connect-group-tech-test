import { useQuery, gql } from '@apollo/client';
import './ProductDetails.css'
import {useParams} from "react-router";

export const GET_VEHICLE = gql`
    query GetVehicle($id: ID!) {
        vehicle(id: $id) {
            id
            model
            modelYear
            price
            description
            media
            meta {
                passengers
                drivetrain
                bodyStyles
                emissions
            }
        }
    }
`

export const ProductDetails = () => {
    const { productId } = useParams()
    const { loading, error, data } = useQuery(GET_VEHICLE, {variables: {id: productId}});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const { vehicle } = data

    if (!vehicle) return <p>Product not found! 😲</p>
    const { meta } = vehicle

    return (
        <div className={'product-details'}>
            <h1>{vehicle.modelYear} {vehicle.model}</h1>
            {vehicle.media.map((image, index) => <img key={index} src={image} alt={`${vehicle.model} - ${vehicle.description}`} />)}
            <h2>{vehicle.price}</h2>
            <p>{vehicle.description}</p>

            <ul className={'product-meta'}>
                <li><span>Passengers: </span><span>{meta.passengers}</span></li>
                <li><span>Drive train: </span><span>{meta.drivetrain.join(', ')}</span></li>
                <li><span>Body styles: </span><span>{meta.bodyStyles.join(', ')}</span></li>
                <li><span>Emissions: </span><span>{meta.emissions}</span></li>
            </ul>
        </div>
    );
}
