import React from 'react';
import "../styles/Home.scss";
import CartoonHero from '../animation/developer';
import WhatIDo from '../component/WhatIDo';
import Work from '../component/work';
import Skills from '../component/skill';
import { FaArrowTrendUp } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
   <section className='home'>
      <div className='hero'>
          <div className='intro'>
             <div className='intro_component'>
                <h1>
                  A Web engineer with<span>Design intuition</span>  <span>and Algorithmic depth</span>
                </h1>
                <p>
                  I engineer solutions interfaces that mirror the design — down to the last pixel.
                  Crafting seamless user experiences with pixel-perfect interfaces backed by solid full-stack logic
                </p>
                <button className='btn' onClick={()=>navigate("/portfolio")}>
                  <span> View Portfolio</span>
                  <FaArrowTrendUp/>
                </button>
             </div>
          </div>
          <div className='animate'>
            <div>
              <CartoonHero/>
            </div>
          </div>
      </div> 
      <WhatIDo/> 
      <Work/>
      <Skills/>
      <div className='getInTouch'>
        <h1>DO YOU HAVE A PROJECT TO DISCUSS?</h1>
        <button onClick={()=>navigate("/contact")}><span>GET IN TOUCH</span><FaArrowTrendUp/></button>
      </div>
   </section>
  );
}
