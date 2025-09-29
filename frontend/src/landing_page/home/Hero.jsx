import React from 'react';


function Hero() {
   

    return ( 
       <div className="container p-5 mb-5">
        <div className="row">
            <img src="images/homeHero.png" alt="hero img" className="mb-5"></img>
            <h1 className="mt-5" style={{textAlign:"center"}}>Invest in everything</h1>
            <p style={{textAlign:"center"}}>Online platform to invest in stocks,mutual funds.</p>
            <button  className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto"} }>Signup Now</button>
        </div>
       </div>
     );
}

export default Hero;