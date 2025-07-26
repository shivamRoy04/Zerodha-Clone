import React from 'react';

function Stats() {
    return (
        <div className="container my-5 py-4 mx-5 p-5">
            <div className="row align-items-center">
                {/* Left column - Text section */}
                <div
                    className="col-lg-6 col-12 mb-4 mb-lg-0"
                    style={{
                        paddingRight: "2rem",
                        paddingLeft: "1.5rem"  // Added left padding
                    }}
                >
                    <h2 style={{
                        fontSize: "2.2rem",
                        fontWeight: "700",
                        marginBottom: "2rem",
                        color: "#222"
                    }}>
                        Trust with confidence
                    </h2>

                    <h4 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "0.5rem" }}>Customer-first always</h4>
                    <p style={{ color: "#555", marginBottom: "1.5rem", fontSize: "1rem", lineHeight: "1.6" }}>
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                    </p>

                    <h4 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "0.5rem" }}>No spam or gimmicks</h4>
                    <p style={{ color: "#555", marginBottom: "1.5rem", fontSize: "1rem", lineHeight: "1.6" }}>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <span style={{ color: "#1a73e8", cursor: "pointer" }}>Our philosophies.</span>
                    </p>

                    <h4 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "0.5rem" }}>The Zerodha universe</h4>
                    <p style={{ color: "#555", marginBottom: "1.5rem", fontSize: "1rem", lineHeight: "1.6" }}>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h4 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "0.5rem" }}>Do better with money</h4>
                    <p style={{ color: "#555", fontSize: "1rem", lineHeight: "1.6" }}>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>

                {/* Right column - Image section */}
                <div className="col-lg-6 col-12 text-center">
                    <img
                        src="media/images/ecosystem.png"
                        alt="Zerodha Ecosystem"
                        style={{
                            width: "100%",
                            maxWidth: "550px",
                            height: "auto",
                            margin: "0 auto",
                            display: "block"
                        }}
                    />
                    <div className='text-center'>
                        <a href=''>
                          Explore our products<i class="fa-solid fa-arrow-right"></i>
                        </a>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <a href=''>
                           Try Kite
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
