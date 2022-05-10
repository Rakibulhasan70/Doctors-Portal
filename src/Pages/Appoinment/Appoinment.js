import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinments from './AvailableAppoinments';

const Appoinment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className='px-12'>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailableAppoinments date={date}></AvailableAppoinments>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;