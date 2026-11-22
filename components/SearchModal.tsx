import { searchProducts } from "@/lib/data";

export default function SearchModal() {
  return (
    <div className="modal fade search-modal theme-modal-2" id="searchModal" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title fs-5">Search in store</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal">
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="search-input-box">
              <input type="text" className="form-control" placeholder="Search with brands and categories..." />
              <i className="ri-search-2-line"></i>
            </div>

            <ul className="search-category">
              <li className="category-title">Top search:</li>
              <li>
                <a href="/shop">Baby Essentials</a>
              </li>
              <li>
                <a href="/shop">Bag Emporium</a>
              </li>
              <li>
                <a href="/shop">Bags</a>
              </li>
              <li>
                <a href="/shop">Books</a>
              </li>
            </ul>

            <div className="search-product-box mt-sm-4 mt-3">
              <h3 className="search-title">Most Searched</h3>

              <div className="row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3">
                {searchProducts.map((product, index) => (
                  <div className="col" key={product.name}>
                    <div className="basic-product theme-product-1">
                      <div className="overflow-hidden">
                        <div className="img-wrapper">
                          {index === 0 ? (
                            <div className="ribbon">
                              <span>Exclusive</span>
                            </div>
                          ) : null}
                          <a href="/product/men-s-sneaker-retro-shoes">
                            <img src={product.image} className="img-fluid blur-up lazyloaded" alt="" />
                          </a>
                          <div className="rating-label">
                            <i className={index === 1 ? "fa fa-star" : "ri-star-fill"}></i>
                            <span>{product.rating}</span>
                          </div>
                          <div className="cart-info">
                            <a href="/wishlist" title="Add to Wishlist" className="wishlist-icon">
                              <i className="ri-heart-line"></i>
                            </a>
                            <button data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" title="Add to cart">
                              <i className="ri-shopping-cart-line"></i>
                            </button>
                            <a href="#quickView" data-bs-toggle="modal" title="Quick View">
                              <i className="ri-eye-line"></i>
                            </a>
                            <a href="/compare" title="Compare">
                              <i className="ri-loop-left-line"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div>
                            <div className="brand-w-color">
                              <a className="product-title" href="/product/men-s-sneaker-retro-shoes">
                                {product.name}
                              </a>
                              <div className="color-panel">
                                <ul>
                                  <li style={{ backgroundColor: "papayawhip" }}></li>
                                  <li style={{ backgroundColor: "burlywood" }}></li>
                                  <li style={{ backgroundColor: "gainsboro" }}></li>
                                </ul>
                                <span>+2</span>
                              </div>
                            </div>
                            <h6>{product.sub}</h6>
                            <h4 className="price">
                              ${product.price}
                              <del> ${product.oldPrice} </del>
                              <span className="discounted-price"> 7% Off</span>
                            </h4>
                          </div>
                          <ul className="offer-panel">
                            <li>
                              <span className="offer-icon">
                                <i className="ri-discount-percent-fill"></i>
                              </span>
                              Limited Time Offer: 4% off
                            </li>
                            <li>
                              <span className="offer-icon">
                                <i className="ri-discount-percent-fill"></i>
                              </span>
                              Limited Time Offer: 4% off
                            </li>
                            <li>
                              <span className="offer-icon">
                                <i className="ri-discount-percent-fill"></i>
                              </span>
                              Limited Time Offer: 4% off
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}