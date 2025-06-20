import ContentSection from "./ContentSection";
import ImageSection from "./ImageSection";

function RightImgFeatureCard({src, heading, text, link1, link2, imgSrc1, imgSrc2}) {
    return ( 
    <div className="container py-5 ">
        <div  className="row gx-5 px-5 mx-5">
            
      <div className="col d-flex align-items-center ms-3">
      <ContentSection heading={heading}  text={text} link1={link1} link2={ link2} imgSrc1={imgSrc1} imgSrc2={imgSrc2}  />
      </div>
      <div className="col me-3">
      <ImageSection src={src} />
      </div>
    </div>
    </div>
     );
}

export default RightImgFeatureCard;