import React from 'react';
import Navigation from './Navigation';

function Home(){
    return(
        <>
            <Navigation /> 
            <div class="top">
                <img class="cloud1" src="cloud.png" alt="cloud"/> 
                <h1>I'm Malshi.</h1>
                <h2>a <span><u>Pro</u></span>grammer</h2>
                <img class="cloud2" src="cloud.png" alt="cloud"/> 
                <img class="mountain" src="mountain2.png" alt="mountain"/>        
            </div>   
        </>
    )  

}

export default Home;