import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg'
import mark from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCart bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" img={clock}></InfoCart>
            <InfoCart bgClass="bg-[#3A4256]" cardTitle="Ours Locations" img={mark}></InfoCart>
            <InfoCart bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact Us" img={phone}></InfoCart>
        </div>
    );
};

export default Info;