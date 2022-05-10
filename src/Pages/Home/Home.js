import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Dental from './Dental';
import Footer from './Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Dental></Dental>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;