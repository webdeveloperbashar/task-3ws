import React from 'react';
import AboutSection from './aboutSection';
import DemoSection from './demoSection';
import FeatureSections from './featureSection';
import HeroSection from './heroSection';
import OutstandingSection from './outstandingSection';

const Home = () => {
  return (
    <div className='home_wrapper'>
      {/* hero section */}
      <HeroSection />
      {/* about section */}
      <AboutSection />
      {/* feature section */}
      <FeatureSections />
      {/* demo section */}
      <DemoSection/>
      {/* outstanding section */}
      <OutstandingSection/>
    </div>
  )
}

export default Home;