export default function AddToCartModal() {
  return (
    <div className="modal fade theme-modal-2 addtocart-modal" id="addtocart" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal">
            <i className="ri-close-line"></i>
          </button>
          <div className="modal-body">
            <h3 className="modal-title">Added to cart</h3>
            <div className="row g-3 align-items-center">
              <div className="col-4">
                <img src="/assets/images/gradient/product/1.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-8">
                <h4>Denim Backpack</h4>
                <h5 className="price">$20.55</h5>
                <p className="mb-0">Available for immediate dispatch.</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-light" data-bs-dismiss="modal">
              Continue shopping
            </button>
            <a href="/checkout" className="btn btn-solid btn-gradient">
              checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}