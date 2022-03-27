

import { Fragment } from "react";
import Slider from './Slider';
import WhatWeDo from './WhatWeDo';
import Subscribe from './Subscribe';
import Testimonials from './Testimonials';
import ScrollToTop from "./ScrollToTop";
 import OurChefs from "./OurChefs";
import Loader from '../Loader/Loader';
import { useState,useEffect } from "react";


const Home = () => {
 
    return ( 
        <Fragment>
            <Slider/>
            <WhatWeDo/>
            <Testimonials/>
            <OurChefs/>
            <ScrollToTop/>
        </Fragment>
    )};

 
export default Home;