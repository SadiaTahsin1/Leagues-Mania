import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowIndividual from '../ShowIndividual/ShowIndividual';
import './LeagueDetail.css';


const LeagueDetail = () => {
    const {lid}=useParams();
    const [league1,setleague1]=useState([]);
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${lid}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setleague1(data.leagues));
    },[lid])
    console.log(league1.leagues)
    return (
        <div>
           <div>
           {
           league1.map(l=><ShowIndividual league={l}></ShowIndividual>)
           }      
           </div>
        
            
        </div>
    );
};

export default LeagueDetail;