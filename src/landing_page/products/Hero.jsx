function Hero() {
    return ( 
        <div className="container p-5 text-center mx-auto my-5 border-bottom">
            <h1>Zerodha Products</h1>
            <h5>Sleek, modern, and intuitive trading platforms</h5>
            <p className="pb-5">Check out our <a href="" style={{ textDecoration: "none" ,marginBottom: "25px", display: "inline-block"}} >
              investment offerings{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a> </p>
        </div>
     );
}

export default Hero;