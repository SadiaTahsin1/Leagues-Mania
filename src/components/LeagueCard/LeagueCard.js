import React from 'react';
import { Link } from 'react-router-dom';
import './LeagueCard.css';
const LeagueCard = (props) => {
   const {strLeague,strSport,idLeague}=props.league;
    return (
        <div className="cards col-1">
          <h2>{strLeague}</h2> 
          <h3>{strSport}</h3>
          
          <Link to={`/${idLeague}`}>  
          <button>Explore</button>
          </Link> 
        </div>
    );
};

export default LeagueCard;