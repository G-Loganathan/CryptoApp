import React from "react";
import "./App.css"
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar";
import Exchanges from "./components/Exchanges";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";
import 'antd/dist/reset.css';



function App() {

  return (
    <div className="app">

      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage></Homepage>}/>
              <Route path="exchanges" element={<Exchanges></Exchanges>}/>
              <Route path="cryptocurrencies" element={<Cryptocurrencies></Cryptocurrencies>}/>
              <Route path="crypto/:uuid" element={<CryptoDetails></CryptoDetails>}/>
              <Route path="news" element={<News></News>}/>
            </Routes>
          </div>
        </Layout>
          <div className="footer" >
            <Typography.Title level={5} style={{color:'white', textAlign:"center"}}>
                Cryptoverse <br />
                All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchange</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
      </div>

    </div>
  );
}

export default App;
