import React, { useEffect, useState } from 'react';
import '../../Icon/Facebook.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faGooglePlusG,faTwitter } from "@fortawesome/free-brands-svg-icons"

import LeagueCard from '../LeagueCard/LeagueCard';
import './Home.css';

const Home = () => {
    const [league,setLeagues]=useState([]);
    useEffect(()=>{
        const url='https://www.thesportsdb.com/api/v1/json/1/all_leagues.php'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setLeagues(data.leagues))
        
    },[])
    
    const league9=league.slice(0,12)
    
    return (
        <div>
        <header>
        <h1>Leagues Mania</h1>
        
        </header>
         
        {
            league9.map(l=><LeagueCard league={l}></LeagueCard>)
        }  
        
        <footer>
            <div className="icons">
            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="https://www.twittar.com"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.google.com"><FontAwesomeIcon icon={faGooglePlusG} /></a>
            </div>
        
        </footer>     
       </div>
    );
};

export default Home;