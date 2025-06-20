function ImageSection({src}) {
    const alt= src.slice(0, -4);
    return ( 
        <div className="container">
            <img  src={`images/${src}`} alt={alt} />
        </div>
     );
}

export default ImageSection;