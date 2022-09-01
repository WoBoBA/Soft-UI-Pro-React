import React, { useState, useEffect } from "react";

import { Helmet } from "react-helmet";

import "./home.css";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1b2745822cmsh000b1eeab9fba0dp15f5b1jsnb09584fe4345",
      "X-RapidAPI-Host":
        "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(
      "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world",
      options
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
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
                {items.map((item) => (
                  <span className="home-text01" key={item.id}>
                    {item.TotalCases.toLocaleString("en-US")}
                  </span>
                ))}
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
                  {items.map((item) => (
                    <span className="home-text08" key={item.id}>
                      {item.ActiveCases.toLocaleString("en-US")}
                    </span>
                  ))}
                </div>
              </div>
              <div className="home-card2">
                <div className="home-container08">
                  <span className="home-text09">หายแล้ว</span>
                  {items.map((item) => (
                    <span className="home-text10" key={item.id}>
                      {item.TotalRecovered.toLocaleString("en-US")}
                    </span>
                  ))}
                </div>
              </div>
              <div className="home-card3">
                <div className="home-container09">
                  <span className="home-text11">
                    <span>เสียชีวิต</span>
                    <br className="home-text13"></br>
                    <br></br>
                  </span>
                  {items.map((item) => (
                    <span className="home-text15" key={item.id}>
                      {item.TotalDeaths.toLocaleString("en-US")}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
