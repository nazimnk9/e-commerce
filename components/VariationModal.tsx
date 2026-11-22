export default function VariationModal() {
  return (
    <div className="modal fade theme-modal-2 variation-modal" id="variationModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal">
            <i className="ri-close-line"></i>
          </button>
          <div className="modal-body">
            <div className="product-right product-page-details variation-title">
              <h2 className="main-title">
                <a href="/product/couture-edge">Cami Tank Top (Blue)</a>
              </h2>
              <h3 className="price-detail">
                $14.25 <span>5% off</span>
              </h3>
            </div>
            <div className="variation-box">
              <h4 className="sub-title">Color:</h4>
              <ul className="quantity-variant color">
                <li className="bg-light">
                  <span style={{ backgroundColor: "rgb(240, 0, 0)" }}></span>
                </li>
                <li className="bg-light">
                  <span style={{ backgroundColor: "rgb(47, 147, 72)" }}></span>
                </li>
                <li className="bg-light active">
                  <span style={{ backgroundColor: "rgb(0, 132, 255)" }}></span>
                </li>
              </ul>
            </div>
            <div className="variation-qty-button">
              <div className="qty-section">
                <div className="qty-box">
                  <div className="input-group qty-container">
                    <button className="btn qty-btn-minus">
                      <i className="ri-subtract-line"></i>
                    </button>
                    <input type="number" readOnly name="qty" className="form-control input-qty" defaultValue="1" />
                    <button className="btn qty-btn-plus">
                      <i className="ri-add-line"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-buttons">
                <button className="btn btn-animation btn-solid hover-solid scroll-button" id="replacecartbtnVariation14" type="submit" data-bs-dismiss="modal">
                  <i className="ri-shopping-cart-line me-1"></i>
                  Update Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}