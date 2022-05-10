import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-110px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl 
                text-primary font-bold'>Appointment</h3>
                <h2 className='text-white text-4xl mt-4 mb-3'>Make an Appointment Today</h2>
                <p className='tex-3xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nam omnis alias explicabo corrupti temporibus dolores culpa dicta? Neque necessitatibus sapiente optio pariatur sequi architecto earum beatae deleniti? Nemo quaerat quam dolorem, quisquam ipsum aut adipisci aliquid dignissimos ducimus saepe?</p>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary font-bold my-10">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppoinment;