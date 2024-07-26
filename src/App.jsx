import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import { InstagramEmbed } from 'react-social-media-embed';

function App() {

  return (
    <>
      <Header />
      {/* <h1>Hello World</h1> */}
      <main>

        <Carousel />

        <div id='services'>
          <h2> Services </h2>
          <div id='serviceCards'>
            <div className='serviceCard'>
              <img src='../../public/cctv.png' alt='cctv' />
              <h3>CCTV <br />Installation</h3>
              <h5>We handle everything from selecting the right camera types to strategic placement, wiring, and system configuration.</h5>
            </div>
            <div className='serviceCard'>
              <img src='../../public/FDAS.png' alt='cctv' />
              <h3>FDAS <br />Installation</h3>
              <h5>We install comprehensive fire detection and alarm systems that include state-of-the-art sensors, control panels, and audible alerts. </h5>
            </div>
            <div className='serviceCard'>
              <img src='../../public/Data.png' alt='cctv' />
              <h3>Data <br />Structuring</h3>
              <h5>We ensure that your CCTV system's data is organized and indexed systematically, allowing for easy retrieval and analysis when needed.</h5>
            </div>
          </div>
        </div>

        <div id='aboutUs'>
          <img src='../../public/logo.gif' alt='aboutus' />
          <div id='aboutUsText'>
            <h2>About Us</h2>
            <h5>Our company, established in 2012, is a leading provider of security solutions based in the Philippines. With a strong foundation in CCTV installation, we have expanded our services nationwide to cater to the evolving needs of our clients. In addition to our expertise in CCTV systems, we have ventured into the installation of fire detection and alarm systems (FDAS) to enhance the safety of various establishments. Recognizing the importance of efficient data management, we also specialize in organizing and structuring CCTV data for seamless access and analysis. Our commitment to delivering top-quality solutions has earned us a trusted reputation in the industry, allowing us to serve a diverse range of clients across the country.</h5>
          </div>
        </div>

        <div id='testimonials'>
          <h2>Testimonials</h2>
          <div id='testimonialCards'>
            <div class='testimonialCardColumn'>
              <div class='testimonialCard'>
                <InstagramEmbed url="https://www.instagram.com/reel/CMf2XCnpXwS/" width={327} captioned />
              </div>
              <div class='testimonialCard'>
                <InstagramEmbed url="https://www.instagram.com/p/CTgSNyHpUYW/" width={327} captioned />
              </div>
            </div>
            <div class='testimonialCardColumn'>
              <div class='testimonialCard'>
                <InstagramEmbed url="https://www.instagram.com/reel/C25HSHMP_e3/" width={327} captioned />
              </div>

              <div class='testimonialCard'>
                <InstagramEmbed url="https://www.instagram.com/p/CLjJo-vHf0S/" width={327} captioned />
              </div>
            </div>
          </div>
          <h2 class='black'> Trusted by over 90 businesses and counting </h2>
          <img src='../../public/testimonials.png' alt='clients' />
        </div>

        <Contact/>
      </main >
    </>
  )
}

export default App
