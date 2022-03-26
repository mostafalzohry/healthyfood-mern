

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
    const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  },[])
    return ( <>
    {loading ? <Loader/>:
        <Fragment>
            <Slider/>
            <WhatWeDo/>
              <OurChefs/>
            <Testimonials/>
            <ScrollToTop/>
        </Fragment>
}</>);
}
 
export default Home;