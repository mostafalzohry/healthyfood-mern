import { Fragment } from "react";
import Slider from './Slider';
import WhatWeDo from './WhatWeDo';
import Subscribe from './Subscribe';
import Testimonials from './Testimonials';
import ScrollToTop from "./ScrollToTop";
import OurChefs from "./OurChefs";


const Home = () => {
    return ( 
        <Fragment>
            <Slider/>
            <WhatWeDo/>
            <Testimonials/>
            <ScrollToTop/>
            <OurChefs/>
        </Fragment>
     );
}
 
export default Home;