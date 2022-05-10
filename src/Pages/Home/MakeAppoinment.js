import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryBtn from '../Shared/PrimaryBtn';
const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-110px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl 
                text-primary font-bold mt-4'>Appointment</h3>
                <h2 className='text-white text-4xl mt-4 mb-3 py-5'>Make an Appointment Today</h2>
                <p className='tex-3xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nam omnis alias explicabo corrupti temporibus dolores culpa dicta? Neque necessitatibus sapiente optio pariatur sequi architecto earum beatae deleniti? Nemo quaerat quam dolorem, quisquam ipsum aut adipisci aliquid dignissimos ducimus saepe?</p>
                <div className='mt-5 mb-5'>
                    <PrimaryBtn></PrimaryBtn>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;