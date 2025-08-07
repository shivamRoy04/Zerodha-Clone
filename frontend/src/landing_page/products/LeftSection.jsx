function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto", // Centers the entire component
        padding: "60px 20px", // Adds breathing space left & right
      }}
    >
      <div
        className="row"
        style={{
          alignItems: "center",
        }}
      >
        {/* Image Section */}
        <div
          className="col-5"
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={imageUrl}
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              objectFit: "contain",
            }}
            alt="product"
          />
        </div>

        {/* Text Section */}
        <div
          className="col-7"
          style={{
            paddingLeft: "60px", // Adds left padding to text
          }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: "600" }} className="text-muted fs-4 mb-4">
            {productName}
          </h1>

          <p style={{ fontSize: "1.2rem", lineHeight: "1.8rem", color: "#666" }}>
            {productDescription}
          </p>

          <div style={{ marginTop: "20px" }}>
            <a
              href={tryDemo}
              style={{
                marginRight: "20px",
                color: "#387ed1",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Try Demo <i class="fa-solid fa-arrow-right"></i>
            </a>

            <a
              href={learnMore}
              style={{
                marginLeft: "20px",
                color: "#387ed1",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "50px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                style={{ height: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
