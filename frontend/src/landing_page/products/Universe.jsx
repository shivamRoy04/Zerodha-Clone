import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
function Product() {
  return (
    <div>
      <Hero> </Hero>
      <LeftSection
        imageUrl="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      ></LeftSection>
      <RightSection
        imageUrl="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      ></RightSection>
      <LeftSection
        imageUrl="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        googlePlay=""
        appStore=""
      ></LeftSection>

      <RightSection
        imageUrl="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      ></RightSection>

      <LeftSection
        imageUrl="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay=""
        appStore=""
      ></LeftSection>
      <p className="text-center mt-5 fs-5 mb-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="">Zerodha.tech</a> blog.
      </p>
      <div className="row text-center mt-5">
        <h1 className="fs-4 mb-3 ">The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted">Thermatic investment platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/streakLogo.png"
            alt=""
            style={{ width: "35%" }}
          />
          <p className="text-small text-muted">Systematic Trading platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            style={{ width: "60%" }}
          />
          <p className="text-small text-muted">Options Trading platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/dittoLogo.png" alt="" style={{width:"30%"}}/>
          <p className="text-small text-muted">Personal advice on life and health insurance</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/goldenpiLogo.png"
            alt=""
            style={{ width: "35%" }}
          />
          <p className="text-small text-muted">Bonds Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "40%" }}
          />
          <p className="text-small text-muted mt-3">Assets Management Ventures</p>
        </div>
         <button
        className="p-2 btn btn-primary fs-5 text-center"
        style={{ width: "20%", margin: "0 auto" }}
      >
        Signup Now
      </button>
      </div>
     
    </div>
  );
}
export default Product;
