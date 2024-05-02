import React from "react";

const Refund = () => {
  return (
    <div className="terms-condition">
      <div className="container">
        <div className="terms-page">
          <h1>Refund and Return Policy</h1>
          <br />

          <p style={{ color: "black" }}>
            At Core White Marketing, we strive to ensure your satisfaction with
            every purchase. If for any reason you are not completely satisfied
            with your purchase of electronic gadgets from our e-commerce
            website, we offer a straightforward return and refund policy
            outlined below.
          </p>

          {/* Add your terms and conditions content here */}
          <div className="terms-content">
            <h2>1. Eligibility</h2>
            <ul>
              <li>
                To be eligible for a return, your item must be unused and in the
                same condition that you received it. It must also be in the
                original packaging.
              </li>
              <li>
                Returns must be initiated within [number of days] days from the
                date of purchase.
              </li>
            </ul>
          </div>

          <div className="terms-content">
            <h2>2. Process</h2>
            <ul>
              <li>
                To initiate a return, please contact our customer support team
                at [contact email/phone number].
                <br />
                Once your return request is approved, we will provide you with
                instructions on how to proceed with the return.
              </li>
            </ul>
          </div>
          <div className="terms-content">
            <h2>3. Refunds</h2>
            <ul>
              <li>
                Upon receiving and inspecting the returned item, we will notify
                you of the approval or rejection of your refund.
              </li>
              <li>
                If your refund is approved, it will be processed and a credit
                will automatically be applied to your original method of payment
                within [number of days] days.
              </li>
            </ul>
          </div>

          <div className="terms-content">
            <h2>4. Exchanges</h2>
            <ul>
              <li>
                If you wish to exchange your item for a different one, please
                contact our customer support team for assistance.
              </li>
            </ul>
          </div>

          <div className="terms-content">
            <h2>5. Damaged or Defective Items</h2>
            <ul>
              <li>
                In the rare event that your item arrives damaged or defective,
                please contact us immediately for assistance. We will work with
                you to resolve the issue promptly.
              </li>
            </ul>
          </div>

          <div className="terms-content">
            <h2>6. Non-Returnable Items</h2>
            <ul>
              <li>
                Certain items are not eligible for return or refund, including:
              </li>
              <li>1. Gift cards</li>
              <li>2. Downloadable software products</li>
              <li>
                3. Items that are not in their original condition or are damaged
                due to misuse
              </li>
            </ul>
          </div>

          <div className="terms-content">
            <h2>7. Shipping Costs</h2>
            <ul>
              <li>
                Shipping costs for returning items are the responsibility of the
                customer, unless the return is due to our error or a
                defective/damaged product.
              </li>
            </ul>
          </div>

          <div className="terms-content">
            <h2>8. Contact Us</h2>
            <ul>
              <li>
                If you have any questions about our return and refund policy,
                please contact us at [contact email/phone number] for
                assistance.
              </li>
              <li>
                Feel free to customize this content to fit the specific needs
                and policies of your e-commerce website.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;
