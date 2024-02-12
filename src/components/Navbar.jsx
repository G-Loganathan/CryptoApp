
import React, { useState, useEffect } from "react";
import { Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
// import icon from "../images/cryptoicon2.jpg";



const Navbar = () => {

  const [activeMenu, setActivateMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize',handleResize)
  }, [])

  useEffect(()=> {

    if(screenSize < 768){
      setActivateMenu(false);
    } else {
      setActivateMenu(true);
    }

  }, [screenSize])

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Typography.Title level={2} className="logo">
          <Link to="/" className="logo-name">
            {/* <Avatar className="avatar-logo" src size="large" /> */}
            MyCryptoApp
          </Link>
        </Typography.Title>
        <button className="menu-control-container" onClick={() => setActivateMenu(!activeMenu)}>
          <MenuOutlined />
        </button>
        {activeMenu && (
            <Menu theme="dark" 
            items={[
            {
              label: <Link to="/">Home</Link>,
              icon: <HomeOutlined />,
            },
            {
              label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
              icon: <FundOutlined />,
            },
            // {
            //   label: <Link to="/exchanges">Exchanges</Link>,
            //   icon: <MoneyCollectOutlined />,
            // },
            {
              label: <Link to="/news">News</Link>,
              icon: <BulbOutlined />,
            }
          ]}
        ></Menu>
        )}

        
      </div>
    </div>
  );
};

export default Navbar;
