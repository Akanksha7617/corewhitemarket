import React from "react";

const TermsAndcond = () => {
  return (
    <div className="terms-condition">
      <div className="container">
        <div className="terms-page">
          <h1>Terms and Conditions</h1>
          <br />

          <p style={{ color: "black" }}>
            By accessing or using the Core White Marketing website. you agree to
            comply with and be bound by these Terms and Conditions. <br/>If you do
            not agree with any of these terms, you are prohibited from using or
            accessing this site.
          </p>

          {/* Add your terms and conditions content here */}
          <div className="terms-content">
            <h2>1. Use of the Website</h2>
            <ul>
              <li>
                You must be at least 18 years old to use this Website. By using
                this Website and agreeing to these Terms and Conditions, you
                represent and warrant that you are at least 18 years of age.
              </li>
            </ul>
          </div>

          <div className="terms-content">
            <h2>2. Products</h2>
            <ul>
              <li>
                We strive to provide accurate descriptions and images of our
                products. However, please note that product descriptions and
                images may not always be complete, reliable, or up to date.
              </li>
            </ul>
          </div>
          <div className="terms-content">
            <h2>3. Pricing and Payment</h2>
            <ul>
              <li>
                All prices listed on our website are in [currency] and are
                subject to change without notice. Payment must be made in full
                at the time of purchase.
              </li>
            </ul>
          </div>

          <div className="terms-content">
            <h2>4. Shipping and Delivery</h2>
            <ul>
              <li>
                We aim to ship orders promptly. However, please allow for
                reasonable shipping and delivery times. We are not responsible
                for any delays or damages incurred during shipping.
              </li>
            </ul>
          </div>

          <div className="terms-content">
            <h2>5. Returns and Refunds</h2>
            <ul>
              <li>
              Please refer to our [Return Policy] for information on returns and refunds.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndcond;
