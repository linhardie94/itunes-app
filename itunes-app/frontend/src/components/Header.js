//this is my header component
import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");

    //setting active tab to show when you're on the page
    const location = useLocation();
    useEffect(() => {
        if(location.pathname === "/") {
            setActiveTab("Home")
        } else if(location.pathname === "/add") {
            setActiveTab("AddFavourite")
        } else if(location.pathname === "/search") {
            setActiveTab("Search")
        }
    }, [location])

    //setting up the header component to respond on click and show active tab
  return (
    <div className='Header'>
        <p className='Logo'>Your iTunes Favourites List</p>
        <div className='HeaderRight'>
                <Link to="/">
                    <p  
                        className={`${activeTab === "Home" ? "active" : ""}`} 
                        onClick={() => setActiveTab("Home")}
                    >
                        Home
                    </p>
                </Link>
                <Link to="/add">
                    <p 
                        className={`${activeTab === "AddFavourite" ? "active" : ""}`} 
                        onClick={() => setActiveTab("AddFavourite")}
                    >
                        Add favourite
                    </p>
                </Link>
                <Link to="/search">
                    <p 
                        className={`${activeTab === "Search" ? "active" : ""}`} 
                        onClick={() => setActiveTab("Search")}
                    >
                        Search
                    </p>
                </Link>
            </div>
    </div>
  )
}

export default Header