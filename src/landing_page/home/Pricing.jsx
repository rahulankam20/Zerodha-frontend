import React from 'react'

function Pricing() {
     return ( 
        <div className="container">
            <div className="row p-5 text-start">
                <div className="col-4">
                    <h2 className='mb-3'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p><a href="" style={{ textDecoration: "none" }}>
              See Pricing{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col border p-5 text-center">
                            <h1 className='mb-4' ><i className="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p>Free account
opening</p>
                        </div>
                        <div className="col border p-5 text-center">
                            <h1 className='mb-4'><i className="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Intraday and
F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

    );
}

export default Pricing;