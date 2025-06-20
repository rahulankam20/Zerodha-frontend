import {Link} from 'react-router-dom'

function Team() {
     return ( 
        <div className="container  mb-5">
            <h1 className="text-center mb-5 mx-5">People</h1>
            <div className="d-flex justify-content-center px-5 mx-5 pt-5">
                <div className="container text-center">
                    <img className='rounded-circle mb-4'style={{ height: "295px" }} src="/images/nithinKamath.jpg" alt="nithin-kamath" />
                    <h1 className='fs-5 mb-4'>Nithin Kamath</h1>
                    <p className='text-muted' > Founder, CEO </p>
                </div>
                <div>
                    <p style={{lineHeight:"1.7rem"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p style={{lineHeight:"1.7rem"}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <Link to='/' className='text-decoration-none'> Homepage</Link> / <a href="#" className='text-decoration-none'>TradingQnA</a> / <a href="#" className='text-decoration-none'>Twitter</a></p>
                </div>
                
            </div>
        </div>

    );
}

export default Team;