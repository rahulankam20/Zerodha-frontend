function PartnerPlatformComponent({src, text}) {
    const alt= src.slice(0,-4);
    return ( 
        <div className="container w-75">
            <img src={`images/${src}`} alt={alt} style={{width:'80%',margin:'0 0 20px 0'}} />
            <p style={{color:'gray', textAlign:'center', fontSize:'0.75rem'}} >{text}</p>
        </div>
     );
}

export default PartnerPlatformComponent;

