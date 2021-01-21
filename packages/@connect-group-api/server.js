import pkg from 'apollo-server';
const { ApolloServer, gql } = pkg;
import { vehicles } from "./data/vehicles.js";

// TODO: Usually this would be abstracted into feature folders
const typeDefs = gql`
    type Vehicle {
        id: String!,
        model: String,
        modelYear: String,
        description: String,
        price: String,
        meta: VehicleMeta
        media: [String!]
    }
    
    type VehicleMeta {
        passengers: Int,
        drivetrain: [String!],
        bodyStyles: [String!],
        emissions: String
    }

    type Query {
        vehicles: [Vehicle],
        vehicle(id: ID!): Vehicle
    }
`;

const resolvers = {
    Query: {
        vehicles: () => vehicles,
        vehicle: (parent, {id}) => vehicles.find(vehicle => vehicle.id === id),
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Running on: ${url}`);
});
