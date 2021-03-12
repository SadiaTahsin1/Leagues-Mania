import React from 'react';
import './ShowIndividual.css';
import flag from '../../Icon/flag (1) 1.png';
import founded from '../../Icon/found 1.png';
import gen from '../../Icon/male-gender-sign 1.png';
import game from '../../Icon/football (1) 1.png';
import male from '../../Photo/Rectangle 28.png';
import female from '../../Photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faYoutube } from "@fortawesome/free-brands-svg-icons"

const ShowIndividual = (props) => {
    const gender=props.league.strGender;
    const {strLogo,strLeague,intFormedYear,strCountry,strSport,strGender,strFacebook,strTwitter,strYoutube}=props.league;

    let showImg;
    console.log(gender)
    if(gender==="Male"){
        showImg=<img src={male} alt=""></img>
    }
    else{
        showImg=<img src={female} alt=""></img>
    }
    return (
        <div>
            <div className="upper col-1">
            
            <img src={strLogo} alt=""/>
            
            </div>
            <div className="container">
                <div className="leagueInfo col-2">
                <h1>{strLeague}</h1> 
                <p><img src={founded} alt=""></img>  Founded: {intFormedYear}</p> 
                <p><img src={flag} alt=""></img> Country: {strCountry}</p>
                <p><img src={game} alt=""></img> Sport Type: {strSport}</p>
                <p><img src={gen} alt=""></img> Gender: {strGender}</p>
           
                </div>
           
                <div className="league-image col-3">
                {/* <img src={props.league.strFanart2} alt=""/> */}
                {/* <img src={Facebook} alt=""/>
                */}
                {showImg}
                </div>
            </div>
            <div className="textsection col-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic vitae earum, distinctio sed quisquam ut quaerat doloribus illo adipisci velit qui repudiandae eius, minima aut numquam illum fugit animi et.
                Iusto quo dolorem voluptatum aspernatur praesentium facilis voluptate, error delectus in a! Error, mollitia? Voluptatum cupiditate quod eos eaque nostrum odit dolores dolore necessitatibus, eius quae omnis quo tenetur veritatis?
                Illum sed odit similique laboriosam doloribus culpa iure odio. Culpa cupiditate at voluptatibus. Odio, reiciendis, totam iste enim doloribus possimus aliquam alias nihil ipsam dolore quo ducimus quidem deleniti eos.
                Libero consequuntur voluptatem impedit non! Officiis voluptates cum iure id, laborum placeat? Suscipit quidem labore aliquid natus repellat nam reiciendis itaque vel eos. Necessitatibus cupiditate pariatur voluptatem atque ex distinctio?
                Magnam, eos nam tenetur necessitatibus molestiae commodi aliquam minus, ex omnis ratione sequi pariatur modi, autem fugiat corrupti adipisci saepe. Quasi incidunt repudiandae cum beatae quae, tenetur id ut!
                Maxime perferendis corrupti a ex iusto et omnis eius architecto illum officiis aspernatur possimus culpa dolorum cupiditate dolorem minima unde, sit cumque est, neque aperiam nesciunt. Pariatur reiciendis aliquid ratione?
                Minus fugiat consectetur, unde perferendis, eligendi ipsa, explicabo animi voluptatem tempore eum autem enim beatae totam quisquam id rerum amet hic nihil velit inventore ut. Maiores at iure a fugit!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere asperiores itaque repellendus, cum incidunt doloremque, aspernatur dolorum placeat in id. Harum, distinctio! Illum necessitatibus, accusamus modi ab numquam incidunt.
            Molestiae, asperiores nemo nostrum sunt quis adipisci doloremque sed accusamus culpa at facilis beatae hic ab in ipsa sequi doloribus explicabo deleniti quod tempore placeat ea! Ut beatae earum a!
            Ipsam atque doloribus placeat nobis hic inventore, aspernatur at esse optio ex quisquam sit iure aliquam quaerat temporibus debitis vel suscipit ratione cupiditate et facilis ipsum. Doloribus magni eaque laboriosam?
            Culpa, sapiente esse? Natus culpa quam sunt fuga aliquam cumque sint saepe sapiente tempora aut beatae assumenda at illum, quaerat harum nostrum! Error laborum expedita nemo sit ullam eligendi voluptas!
            Nobis id nihil non, tenetur quo perferendis maxime similique quia soluta recusandae accusamus necessitatibus libero quibusdam, veniam totam. Tempora praesentium itaque dignissimos, in facilis dicta ab corrupti alias et sequi.</p>
            </div>
            
            <div className="icons col-5">
            <a href={strFacebook}><FontAwesomeIcon icon={faFacebook}/></a>
            <a href={strTwitter}><FontAwesomeIcon icon={faTwitter} /></a>
            <a href={strYoutube}><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
        </div>
    );
};

export default ShowIndividual;