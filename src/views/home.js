import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>covid-19</title>
        <meta property="og:title" content="covid-19" />
      </Helmet>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <div className="home-container02">
              <div className="home-container03">
                <span className="home-text">ผู้ติดเชื้อสะสม</span>
              </div>
              <span className="home-text01">608231865</span>
            </div>
          </div>
          <div className="home-container04">
            <span className="home-text02">
              <span>ยืนยันตัวเลขผู้ติดเชื้อ</span>
              <br></br>
            </span>
            <div className="home-container05">
              <span className="home-text05">COVID-19</span>
            </div>
            <span className="home-text06">ทั่วโลก</span>
          </div>
          <div className="home-container06">
            <div className="home-card1">
              <div className="home-container07">
                <span className="home-text07">กำลังรักษา</span>
                <span className="home-text08">17227531</span>
              </div>
            </div>
            <div className="home-card2">
              <div className="home-container08">
                <span className="home-text09">หายแล้ว</span>
                <span className="home-text10">584547517</span>
              </div>
            </div>
            <div className="home-card3">
              <div className="home-container09">
                <span className="home-text11">
                  <span>เสียชีวิต</span>
                  <br className="home-text13"></br>
                  <br></br>
                </span>
                <span className="home-text15">6496452</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-testimonials">
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image"
        />
      </section>
    </div>
  )
}

export default Home
