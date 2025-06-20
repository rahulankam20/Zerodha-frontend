
import LeftImgFeatureCard from "./LeftImgFeatureCard";
import RightImgFeatureCard from "./RightImgFeatureCard";
import Hero from "./Hero";
import Universe from "./Universe";

function ProductsPage() {
    //  first feature section
  const src1 = "kite.png";
  const heading1 = "Kite";
  const text1 =
    "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.";
  const link11 = "Try demo";
  const link21 = "Learn more";
  const imgSrc11 = "googlePlayBadge.svg";
  const imgSrc21 = "appstoreBadge.svg";

//   second feature section

    const src2 = "console.png";
  const heading2 = "Console";
  const text2 = "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.";
  const link12 = "Learn more";
  const link22 = "";
  const imgSrc12 = "googlePlayBadge.svg";
  const imgSrc22 = "appstoreBadge.svg";

//   third feature section

const src3 = "coin.png";
  const heading3 = "Coin";
  const text3 =
    "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.";
  const link13 = "Coin";
  const imgSrc13 = "googlePlayBadge.svg";
  const imgSrc23 = "appstoreBadge.svg";

//   fourth feature section

const sr4 = "kiteconnect.png";
  const headin4 = "Kite Connect API";
  const tex4 =
    "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.";
  const link4 = "Kite Connect";
  const imgSrc14 = "googlePlayBadge.svg";
  const imgSrc24 = "appstoreBadge.svg";

//   fifth feature section 

const src5 = "varsity.png";
  const heading5 = "Varsity mobile";
  const text5 =
    "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.";
  const imgSrc15 = "googlePlayBadge.svg";
  const imgSrc25 = "appstoreBadge.svg";

  return (
    <>
      <Hero />
      <LeftImgFeatureCard
        src={src1}
        heading={heading1}
        text={text1}
        link1={link11}
        link2={link21}
        imgSrc1={imgSrc11}
        imgSrc2={imgSrc21}
      />
      <RightImgFeatureCard
        src={src2}
        heading={heading2}
        text={text2}
        link1={link12}
        link2={link22}
      />
      <LeftImgFeatureCard
        src={src3}
        heading={heading3}
        text={text3}
        link1={link13}
        imgSrc1={imgSrc13}
        imgSrc2={imgSrc23}
      />
      <RightImgFeatureCard
        src={sr4}
        heading={headin4}
        text={tex4}
        link1={link4}
      />
      <LeftImgFeatureCard
        src={src5}
        heading={heading5}
        text={text5}
        imgSrc1={imgSrc15}
        imgSrc2={imgSrc25}
      />
      <h5 className="text-muted text-center mb-5">Want to know more about our technology stack? Check out the <a className="text-decoration-none" href="#">Zerodha.tech</a> blog.</h5>
      <Universe/>
    </>
  );
}

export default ProductsPage;
