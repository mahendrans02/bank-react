import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './images/newPic2.jpg';
import image2 from './images/newPic1.jpg';
import image3 from './images/newPic3.jpg';
import image5 from './images/newPic7.jpg';
import image6 from './images/bg11.avif';
import image7 from './images/bg10.avif';
// import backgroundImage from './images/image.png'; // Import your background image

export default function Home() {
  return (
    <>
      <div
        id="main-page"
        className="homeContent"
        style={{
          // backgroundImage: `url(${backgroundImage})`, // Use the imported image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row", // Change to row for side-by-side layout
          alignItems: "center",
          justifyContent: "space-between", // Space between Carousel and words
          padding: "20px",
        }}
      >
        {/* Carousel on the Left Side */}
        <div id="cardDiv" style={{ width: "40%", marginLeft: "20px" }}> {/* Adjusted width */}
          <Card style={{
            borderRadius: "60px 20px 60px 20px",
            overflow: "hidden",
            animation: "moving 3s linear alternate",
            border: "none",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background for the card
            width: "100%", // Ensure the Card takes the full width of its container
            height: "auto", // Adjust height automatically
          }}>
            <Carousel>
              <Carousel.Item interval={500}>
                <img src={image3} className="d-block w-100" alt="Slide 1" style={{ height: "300px", objectFit: "cover" }} /> {/* Adjusted height */}
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src={image1} className="d-block w-100" alt="Slide 2" style={{ height: "300px", objectFit: "cover" }} /> {/* Adjusted height */}
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src={image2} className="d-block w-100" alt="Slide 3" style={{ height: "300px", objectFit: "cover" }} /> {/* Adjusted height */}
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src={image5} className="d-block w-100" alt="Slide 4" style={{ height: "300px", objectFit: "cover" }} /> {/* Adjusted height */}
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src={image7} className="d-block w-100" alt="Slide 5" style={{ height: "300px", objectFit: "cover" }} /> {/* Adjusted height */}
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src={image6} className="d-block w-100" alt="Slide 6" style={{ height: "300px", objectFit: "cover" }} /> {/* Adjusted height */}
              </Carousel.Item>
            </Carousel>
          </Card>
        </div>

        {/* Words Section on the Right Side */}
        <div id="words" style={{ 
          width: "50%", // Adjusted width
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background for text
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          marginRight: "20px", // Add margin to separate from Carousel
        }}>
          <h1>Welcome to</h1>
          <h1>Bank Of React</h1>
          <h4>It's time to explore our bad bank initiative and tackle those distressed assets head-on.</h4>
          <button id="home-btn" style={{ 
            backgroundColor: "#9d75cf",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}>Explore</button>
        </div>
      </div>

      {/* About Us Section */}
      <div className='about-div' style={{ 
        textAlign: "center", 
        marginTop: "100px", 
        marginBottom: "100px", 
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background for the about section
        padding: "20px",
        borderRadius: "10px",
      }}>
        <h2>About Us</h2>
        <p>Bank of React is a bad bank initiative that helps you manage your distressed assets.<br />
          Our mission is to help you take control of your finances and make informed decisions.<br />
          We offer a range of services, including account creation, login, deposit, and withdrawal.<br />
          Our platform is secure, user-friendly, and easy to navigate.
          Join us today and start managing your finances like a pro!</p>
      </div>
    </>
  );
}