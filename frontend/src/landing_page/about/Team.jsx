import React from 'react';

function Team() {
    return (
      <div className="container">
      <div className="row  mt-2 p-5 border-top">
        <h1 className=" text-center">People</h1>
      </div>

      <div className="row  text-muted" >
       <div className='col-6 p-5 text-center' >
      <img src="images\nithinKamath.jpg" style={{width:"60%", borderRadius:"100%"}}></img>
      <h3 className='mt-5 '>Nithin Kamath </h3>
<h6>Founder, CEO

</h6>
       </div>
       <div className="col-6 p-5 mt-5 " style={{lineHeight:"1.7"}}>
     <p> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>

<p>Connect on
<a href="" style={{textDecoration:"none"}}> Homepage </a>/ &nbsp;
<a href="" style={{textDecoration:"none"}}>TradingQnA </a>&nbsp;
/<a href="" style={{textDecoration:"none"}}> Twitter</a></p>
</div>
</div>
</div>

     
      );
}

export default Team;