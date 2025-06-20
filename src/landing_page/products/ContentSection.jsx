function ContentSection({heading, text, link1, link2, imgSrc1, imgSrc2}) {
    const imgAlt1= imgSrc1?.slice(0, -4)|| "";
    const imgAlt2= imgSrc2?.slice(0, -4)|| "";
  return (
    <div className="container">
      <h2 className="mb-4">{heading}</h2>
      <p className="mb-3">
        {text}
      </p>
      {link1 && (<a
        href="#"
        style={{
          textDecoration: "none",
          marginBottom: "25px",
          display: "inline-block",
        }}
      >
        {link1} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>)}
      {link2 && (<a
        href="#"
        style={{
          textDecoration: "none",
          marginLeft: "20px",
          display: "inline-block",
        }}
      >
        {link2}
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>)}
      <br />
      
      {imgSrc1 && ( <a className="text-decoration-none" href=''> <img className="me-5" src={`images/${imgSrc1}`} alt={imgAlt1} /> </a>)}
       {imgSrc2 && (<a className="text-decoration-none" href=''> <img src={`images/${imgSrc2}`} alt={imgAlt2} /></a>)}
      
    </div>
  );
}

export default ContentSection;
