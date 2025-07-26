import React from 'react';

function Awards() {
    return (
        <>
            <div className="container" style={{ marginTop: "5rem", marginBottom: "5rem" }}>
                <div className="row align-items-center" style={{ padding: "3rem 2rem" }}>
                    {/* Left Column - Image */}
                    <div className="col-lg-6 col-sl-12 mb-4 mb-lg-0" style={{ textAlign: "center" }}>
                        <img src="media/images/largestBroker.svg" alt="Largest Broker" style={{ maxWidth: "100%", height: "auto" }} />
                    </div>

                    {/* Right Column - Text */}
                    <div className="col-lg-6 col-sl-12" style={{ padding: "2rem" }}>
                        <h2 style={{ fontWeight: 600, marginBottom: "1.5rem" }}>Largest stock broker in India</h2>
                        <p style={{ fontSize: "1rem", color: "#6c757d", marginBottom: "2rem" }}>
                            2+ million Zerodha clients contributed to over 15% of all rental order volumes in India daily by trading and investing in:
                        </p>

                        <div className="row">
                            <div className="col-6">
                                <ul style={{ paddingLeft: "1rem" }}>
                                    <li><p>Futures and Options</p></li>
                                    <li><p>Commodity and Derivatives</p></li>
                                    <li><p>Current Derivatives</p></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul style={{ paddingLeft: "1rem" }}>
                                    <li><p>Stock & IPOs</p></li>
                                    <li><p>Direct Mutual Funds</p></li>
                                    <li><p>Bonds and Govt.Securities</p></li>
                                </ul>
                            </div>

                            {/* Logos */}
                            <div className="col-12 text-center mt-4">
                                <img
                                    src="media/images/pressLogos.png"
                                    alt="Logos"
                                    style={{ width: "80%", maxWidth: "500px", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Awards;
