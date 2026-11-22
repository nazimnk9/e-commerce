
export default function Footer() {
  return (
    <footer className="footer-light">
      <div className="light-layout">
        <div className="container container-lg">
          <section className="small-section border-section border-top-0">
            <div className="row">
              <div className="col-lg-6">
                <div className="subscribe">
                  <div>
                    <h4>KNOW IT ALL FIRST!</h4>
                    <p>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <form
                  className="form-inline subscribe-form auth-form needs-validation"
                  action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&amp;id=082f74cbda"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                >
                  <div className="form-group mx-sm-3">
                    <input type="text" className="form-control" name="EMAIL" id="mce-EMAIL" placeholder="Enter your email" required />
                  </div>
                  <button type="submit" className="btn btn-solid btn-gradient" id="mc-submit">
                    subscribe
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="section-b-space light-layout">
        <div className="container container-lg">
          <div className="row footer-theme partition-f">
            <div className="col-lg-4 col-md-6">
              <div className="footer-title footer-mobile-title">
                <h4>about</h4>
              </div>
              <div className="footer-content">
                <a href="/" className="footer-logo d-block">
                  <img src="/assets/images/gradient/logo.png" alt="" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam,
                </p>
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/">
                        <i className="ri-google-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/">
                        <i className="ri-twitter-x-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="ri-instagram-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.tiktok.com/">
                        <i className="ri-tiktok-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col offset-xl-1">
              <div className="sub-title">
                <div className="footer-title">
                  <h4>my account</h4>
                </div>
                <div className="footer-content">
                  <ul>
                    <li><a href="/shop">mens</a></li>
                    <li><a href="/shop">womans</a></li>
                    <li><a href="/shop">clothing</a></li>
                    <li><a href="/shop">accessories</a></li>
                    <li><a href="/shop">featured</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="sub-title">
                <div className="footer-title">
                  <h4>why we choose</h4>
                </div>
                <div className="footer-content">
                  <ul>
                    <li><a href="#!">shipping &amp; return</a></li>
                    <li><a href="#!">secure shopping</a></li>
                    <li><a href="#!">gallery</a></li>
                    <li><a href="#!">affiliates</a></li>
                    <li><a href="/contact">contacts</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="sub-title">
                <div className="footer-title">
                  <h4>store information</h4>
                </div>
                <div className="footer-content">
                  <ul className="contact-list">
                    <li>
                      <i className="ri-map-pin-2-fill"></i>Multikart Demo Store, Demo store India 345-659
                    </li>
                    <li>
                      <i className="ri-phone-fill"></i>Call Us: 123-456-7898
                    </li>
                    <li>
                      <i className="ri-mail-fill"></i>Email Us: <a href="#!">Support@Multikart.com</a>
                    </li>
                    <li>
                      <i className="ri-printer-fill"></i>Fax: 123456
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* FOOTER_COLUMNS */}
          </div>
        </div>
      </section>
      <div className="sub-footer">
        <div className="container container-lg">
          <div className="row">
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div className="footer-end">
                <p>
                  <i className="ri-copyright-line"></i> 2024-25 themeforest powered by pixelstrap
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div className="payment-card-bottom">
                <img src="/assets/images/payment.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}