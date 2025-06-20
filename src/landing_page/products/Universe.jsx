import PartnerPlatformComponent from "./PartnerPlatformComponent";
import { Link } from "react-router-dom";

function Universe() {
  const src1 = "zerodhaFundhouse.png ";
  const text1 =
    "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.";

  const src2 = "sensibullLogo.svg ";
  const text2 =
    "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more. ";

  const src3 = "tijoriLogo.svg ";
  const text3 =
    "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.";

  const src4 = "streakLogo.png ";
  const text4 =
    "Systematic trading platform that allows you to create and backtest strategies without coding.";

  const src5 = "smallcaseLogo.png ";
  const text5 =
    "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.";

  const src6 = "dittoLogo.png ";
  const text6 =
    "Personalized advice on life and health insurance. No spam and no mis-selling.";
  return (
    <div className="container text-muted text-center p-5">
      <h2>The Zerodha Universe</h2>
      <p className=" mt-4">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row p-5">
        <div className="col-4">
          <PartnerPlatformComponent src={src1} text={text1} />
        </div>
        <div className="col-4">
          <PartnerPlatformComponent src={src2} text={text2} />
        </div>
        <div className="col-4">
          <PartnerPlatformComponent src={src3} text={text3} />
        </div>
      </div>
      <div className="row px-5">
        <div className="col-4">
          <PartnerPlatformComponent src={src4} text={text4} />
        </div>
        <div className="col-4">
          <PartnerPlatformComponent src={src5} text={text5} />
        </div>
        <div className="col-4">
          <PartnerPlatformComponent src={src6} text={text6} />
        </div>
      </div>
      <Link to="/signup">
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          {" "}
          Sign up for free{" "}
        </button>
      </Link>
    </div>
  );
}

export default Universe;
