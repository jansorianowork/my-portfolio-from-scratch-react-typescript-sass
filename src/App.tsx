import React from 'react';
import Header from './components/Header'
import BannerSection from './components/sections/BannerSection'
import FeatureSection from './components/sections/FeatureSection';
import ArticlesSection from './components/sections/ArticlesSection';
import Footer from './components/Footer';

import './assets/main.scss';

function App() {
  return (
    <div >
      <Header/>
      <BannerSection/>
      <FeatureSection/>
      <ArticlesSection/>
      <Footer/>
    </div>
  );
}

export default App;
