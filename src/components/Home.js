import React from 'react';
import GlitchEffect from 'react-glitch-effect';
import '../styles/home.css';
import Categories from './categories/Categories';

export default function Home() {
  return (
    <div>
      <div className="home_title">
        Let's  <div className="text_element"> <GlitchEffect duration={"1.3s"}>break</GlitchEffect></div>  <div className="text_element">it down!</div>
      </div>
      <Categories />
    </div>
  );
}