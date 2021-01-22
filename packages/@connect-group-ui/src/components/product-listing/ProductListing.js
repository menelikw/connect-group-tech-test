import { useQuery, gql } from '@apollo/client';
import {ProductItem} from "../product-item/ProductItem";
import './ProductListing.css'

export const GET_VEHICLES = gql`
    query GetVehicle {
        vehicles {
            id
            model
            price
            description
            media
        }
    }
`

export const ProductListing = () => {
    const { loading, error, data } = useQuery(GET_VEHICLES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className={'product-listing'}>
            {data.vehicles.map(vehicle => (
                <ProductItem key={vehicle.id} {...vehicle} />
            ))}
        </div>
    );
}
