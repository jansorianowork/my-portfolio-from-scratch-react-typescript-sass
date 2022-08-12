import React from 'react';
import Header from './components/Header'
import BannerSection from './components/Sections/Banner/BannerSection'
import FeatureSection from './components/Sections/Feature/FeatureSection';
import ArticlesSection from './components/Sections/Article/ArticlesSection';
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
