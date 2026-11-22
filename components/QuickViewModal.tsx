import { productBySlug } from "@/lib/data";
import { productHref } from "@/components/ProductBox";

export default function QuickViewModal() {
  const product = productBySlug("men-s-sneaker-retro-shoes");
  return (
    <div className="modal fade bd-example-modal-lg theme-modal" id="quickView" tabIndex={-1} role="dialog">
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content quick-view-modal">
          <div className="modal-body">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <span>&times;</span>
            </button>
            <div className="row">
              <div className="col-lg-6 col-xs-12">
                <div className="quick-view-img">
                  <img src="/assets/images/pro3/1.jpg" alt="" className="img-fluid blur-up lazyload" />
                </div>
              </div>
              <div className="col-lg-6 rtl-text">
                <div className="product-right">
                  <h2>Women Pink Shirt</h2>
                  <h3>$32.96</h3>
                  <ul className="color-variant">
                    <li className="bg-light0"></li>
                    <li className="bg-light1"></li>
                    <li className="bg-light2"></li>
                  </ul>
                  <div className="border-product">
                    <h6 className="product-title">product details</h6>
                    <p>
                      Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                    </p>
                  </div>
                  <div className="product-description border-product">
                    <div className="size-box">
                      <ul>
                        <li className="active">
                          <a href="javascript:void(0)">s</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">m</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">l</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">xl</a>
                        </li>
                      </ul>
                    </div>
                    <h6 className="product-title">quantity</h6>
                    <div className="qty-box">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <button type="button" className="btn quantity-left-minus" data-type="minus" data-field="">
                            <i className="ri-arrow-left-s-line"></i>
                          </button>
                        </span>
                        <input type="text" name="quantity" className="form-control input-number" defaultValue="1" />
                        <span className="input-group-prepend">
                          <button type="button" className="btn quantity-right-plus" data-type="plus" data-field="">
                            <i className="ri-arrow-right-s-line"></i>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-buttons">
                    <a href="#!" className="btn btn-solid btn-gradient" data-bs-dismiss="modal" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas">
                      add to cart
                    </a>
                    <a href={productHref(product)} className="btn btn-solid btn-gradient">
                      view detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}