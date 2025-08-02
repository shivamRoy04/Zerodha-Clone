import React from "react";

function Team() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5 border-top">
          <div className="row p-5 mx-5 ml-2">
            <h1
              className="fs-4 text-center text-muted"
              style={{ lineHeight: "2.3rem" }}
            >
              People
            </h1>
          </div>
          <div
            className="col-6 p-4 text-muted text-center"
            style={{ lineHeight: "1.8" }}
          >
            <img
              src="media/images/nithinKamath.jpg"
              style={{ borderRadius: "100%", width: "60%" }}
              alt="Nithin Kamath"
            />
            <h4 className="mt-5">Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
          </div>
          <div className="col-6 p-4 text-muted " style={{ lineHeight: "1.8" }}>
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on Homepage / TradingQnA / Twitter</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
