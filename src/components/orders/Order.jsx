import React from 'react';
import './Order.css';

const Order = () => {
  return (
    <div className="order-container"> 
      <div className="order-wrapper">
        <div className="checkout-image">
          <div className="info">
            <h2>ShopLyft</h2>
            <h4>Mazda CX-9</h4>
            <h1>$583.98</h1>
            <p>
              <span>4-day rental</span>
              <img
                src="https://img.icons8.com/sf-regular/48/aaaaaa/forward.png"
                alt="Arrow"
                height="15px"
                width="15px"
              />
            </p>
            <img
              className="product-img"
              src="https://nestasia.in/cdn/shop/products/DSC_2822.jpg?v=1676634053"
              height="200px"
              alt="Product-Image"
            />
          </div>
          <div className="order-footer">
            <p>
              <span>Powered by <b>Stripe</b></span>
              <img
                src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-warning-ui-dreamstale-lineal-dreamstale.png"
                alt="Warning-icon"
                height="15px"
                width="15px"
              />
            </p>
            <select>
              <option selected>English</option>
              <option>French</option>
              <option>Arabic</option>
            </select>
          </div>
        </div>
        <div className="checkout-text">
          <div className="back-to-home">
            <a href="">Back to GoCar</a>
            <img
              src="https://img.icons8.com/sf-regular/48/aaaaaa/forward.png"
              alt="Arrow"
              height="15px"
              width="15px"
            />
            <a href="">Payment</a>
          </div>

          <div className="pay-button">
            <button>
              <img
                src="https://img.icons8.com/ios-filled/50/FFFFFF/mac-os.png"
                alt="Apple-Pay"
                height="20px"
                width="20px"
              />
              <span>Pay</span>
            </button>
          </div>

          <div className="or-line">
            <p>Or pay with card</p>
          </div>

          <div className="card-details">
            <label>Card details</label>
            <div className="card-number">
              <input type="number" placeholder="4242 4242 4242 4242" />
              <div>
                <img
                  src="https://img.icons8.com/color/48/000000/visa.png"
                  height="20px"
                  width="20px"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/mastercard.png"
                  height="20px"
                  width="20px"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/amex.png"
                  height="20px"
                  width="20px"
                />
              </div>
            </div>
            <div className="card-info">
              <div className="mm-yy">
                <input type="number" placeholder="MM / YY" />
              </div>
              <div className="cvc">
                <input type="number" placeholder="CVC" />
                <img
                  src="https://img.icons8.com/ios/50/000000/card-verification-value.png"
                  height="20px"
                  width="20px"
                />
              </div>
            </div>
          </div>

          <div className="owner-name">
            <label>Owner name</label>
            <input type="text" placeholder="John Doe" />
          </div>

          <div className="country-region">
            <label>Country or region</label>
            <select>
              <option>United States</option>
              <option>Morocco</option>
              <option>China</option>
            </select>
            <input type="number" placeholder="Zip code" />
          </div>

          <button className="buy-button">Pay $583.98</button>
        </div>
      </div>
      <h5>
        &copy; <b>DevJam Challenges</b> - 2022 - Made with ❤️ by{' '}
        <a href="https://twitter.com/boularbahsmail" target="_blank">
          Ismailium
        </a>
      </h5>
    </div>
  );
};
export default Order;
