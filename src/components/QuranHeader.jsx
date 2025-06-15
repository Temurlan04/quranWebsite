import React from 'react'
import { Link } from 'react-router-dom'

function QuranHeader() {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <button className="menu-button">
                <i className="fas fa-bars"></i>
            </button>
            <a href="#" className="logo">Quran.com</a>
        </div>
        
        <div className="navbar-center">
            <div className="promo">
                <span>Grow Beyond Ramadan!</span>
                <a href="#" className="learn-more">
                    <i className="fas fa-gem"></i>
                    Learn more
                </a>
            </div>
        </div>
        
        <div className="navbar-right">
            <Link to={"/quran/suras"} className="all-suras-btn">All Suras</Link>
            <button className="icon-button language">
                <i className="fas fa-globe"></i>
            </button>
            <button className="icon-button settings">
                <i className="fas fa-cog"></i>
            </button>
            <button className="icon-button search">
                <i className="fas fa-search"></i>
            </button>
        </div>
    </nav>
  )
}

export default QuranHeader