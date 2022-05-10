import React from 'react';
import flouride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whettimng from '../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: '1',
            name: 'Fluroid Treatment',
            description: "",
            img: flouride,

        },
        {
            _id: '2',
            name: 'Cavity Filling',
            description: "",
            img: cavity,

        },
        {
            _id: '3',
            name: 'Teath Whitening',
            description: "",
            img: whettimng,

        },
    ]
    return (
        <div className='my-28 text-xl font-bold uppercase'>
            <div className='text-center '>
                <h3 className='text-primary'>servcices</h3>
                <h2 className='text-4xl mt-3'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
                {
                    services.map(service => (
                        <Service
                            key={service._id}
                            service={service}
                        >

                        </Service>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;