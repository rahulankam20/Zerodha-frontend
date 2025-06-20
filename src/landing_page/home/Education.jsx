import React from 'react'

function Education() {
     return ( 
        <div className="container p-5">
            <div className="row text-start">
                <div className="col">
                    <img src="images/education.svg" alt="" style={{ width:"70%"}} />
                </div>
                <div className="col">
                    <h2 className='mb-4' >Free and open market education</h2>
                    <p className='mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{ textDecoration: "none", marginBottom: "25px", display: "inline-block"}} >
              Varsity{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
                    <p className='mb-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{ textDecoration: "none" ,marginBottom: "25px", display: "inline-block"}} >
              TradingQ&A{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
                </div>
            </div>
        </div>
    );
}

export default Education;