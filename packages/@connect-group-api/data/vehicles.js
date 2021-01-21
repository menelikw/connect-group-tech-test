import {v4 as uuid} from 'uuid'

export const vehicles = [
    {
        id: uuid(),
        model: 'xe',
        modelYear: 'k17',
        description: 'Pulse-quickening, pure Jaguar sports car.',
        price: '£60,000',
        meta: {
            passengers: 2,
            drivetrain: [ 'AWD', 'RWD' ],
            bodyStyles: [ 'COUPÉ', 'CONVERTIBLE' ],
            emissions: 'CO2 Emissions 234 g/km',
        },
        media: [ '/vehicles/xe_k17.jpg' ]
    },
    {
        id: uuid(),
        model: 'xf',
        modelYear: 'k17',
        description: 'Jaguar\'s luxury performance SUV.',
        price: '£40,000',
        meta: {
            passengers: 5,
            drivetrain: [ 'AWD', 'RWD' ],
            bodyStyles: [ 'SUV' ],
            emissions: 'CO2 Emissions 100 g/km'
        },
        media: [ '/vehicles/xf_k17.jpg' ]
    },
    {
        id: uuid(),
        model: 'xj',
        modelYear: 'k16',
        description: 'The most advanced, efficient and refined sports saloon that Jaguar has ever produced',
        price: '£30,000',
        meta: {
            passengers: 5,
            drivetrain: [ 'AWD', 'RWD' ],
            bodyStyles: [ 'saloon' ],
            emissions: 'CO2 Emissions 99 g/km'
        },
        media: [ '/vehicles/xj_k16.jpg' ]
    },
    {
        id: uuid(),
        model: 'f-pace',
        modelYear: 'k17',
        description: 'Luxury business saloon with distinctive design, dynamic drive and state-of-the-art technologies.',
        price: '£36,000',
        meta: {
            passengers: 5,
            drivetrain: [ 'AWD', 'RWD' ],
            bodyStyles: [ 'saloon' ],
            emissions: 'CO2 Emissions 104 g/km'
        },
        media: [ '/vehicles/fpace_k17.jpg' ]
    },
    {
        id: uuid(),
        model: 'f-type',
        modelYear: 'k17',
        description: 'Premium luxury saloon, spacious and beautiful yet powerfully agile.',
        price: '£50,000',
        meta: {
            passengers: 5,
            drivetrain: [ 'AWD', 'RWD' ],
            bodyStyles: [ 'saloon (SWB)', 'saloon (LWB)' ],
            emissions: 'CO2 Emissions 149 g/km'
        },
        media: [ '/vehicles/ftype_k17.jpg' ]
    }
]
