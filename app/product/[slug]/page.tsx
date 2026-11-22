import type { Metadata } from "next";
import ProductBox from "@/components/ProductBox";
import { products, productBySlug, slugify } from "@/lib/data";
import { notFound } from "next/navigation";

type ProductPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return products.flatMap((product) => [{ slug: slugify(product.name) }, { slug: String(product.id) }]);
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  return {
    title: `${product.name} - Multikart`,
    description: product.name,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => slugify(item.name) === slug || String(item.id) === slug);
  if (!product) notFound();

  const gallery: string[] = [
    product.image,
    `/assets/images/gradient/product/${(product.id % 10) + 1}.jpg`,
    "/assets/images/pro3/1.jpg",
  ];
  const related = products.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <main>
      <div className="breadcrumb-section">
        <div className="container">
          <h2>{product.name}</h2>
          <nav className="theme-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/shop">Product</a>
              </li>
              <li className="breadcrumb-item active">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section>
        <div className="collection-wrapper">
          <div className="container">
            <div className="collection-wrapper">
              <div className="row g-4">
                <div className="col-lg-5">
                  <div className="product-slick">
                    {gallery.map((image, index) => (
                      <div key={`${image}-${index}`}>
                        <img src={image} alt="" className="w-100 img-fluid blur-up lazyload" />
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="slider-nav">
                        {gallery.map((image, index) => (
                          <div key={`nav-${image}-${index}`}>
                            <img src={image} alt="" className="img-fluid blur-up lazyload" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="product-page-details product-description-box sticky-details mt-0">
                    <div className="trending-text">
                      <img src="/assets/images/product-details/trending.gif" className="img-fluid" alt="" />
                      <h5>Selling fast! 4 people have this in their carts.</h5>
                    </div>

                    <h2 className="main-title">{product.name}</h2>
                    <div className="product-rating">
                      <div className="rating-list">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                      </div>
                      <span className="divider">|</span>
                      <a href="#!">20 Reviews</a>
                    </div>

                    <div className="price-text">
                      <h3>
                        <span className="fw-normal">MRP:</span> ${product.price.toFixed(2)}
                      </h3>
                      <span>Inclusive all the text</span>
                    </div>

                    <div className="size-delivery-info flex-wrap">
                      <a href="#return" data-bs-toggle="modal">
                        <i className="ri-truck-line"></i> Delivery &amp; Return
                      </a>
                      <a href="#ask-question" data-bs-toggle="modal">
                        <i className="ri-questionnaire-line"></i> Ask a Question
                      </a>
                    </div>

                    <div className="size-box">
                      <h4 className="sub-title">size:</h4>
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

                    <div className="product-buttons">
                      <div className="qty-section">
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
                    </div>

                    <div className="product-buttons">
                      <div className="d-flex align-items-center gap-3">
                        <button
                          className="btn btn-animation btn-solid hover-solid scroll-button"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#cartOffcanvas"
                        >
                          <i className="ri-shopping-cart-line me-1"></i>
                          Add to cart
                        </button>
                        <a href="/checkout" className="btn btn-solid buy-button">
                          Buy Now
                        </a>
                      </div>
                    </div>

                    <div className="left-progressbar w-100">
                      <h6>Please Hurry Only 10 Left In Stock</h6>
                      <div role="progressbar" className="progress">
                        <div className="progress-bar" style={{ width: "76%" }}></div>
                      </div>
                    </div>

                    <div className="buy-box justify-content-center gap-3">
                      <a href="/wishlist">
                        <i className="ri-heart-line"></i>
                        <span>Add To Wishlist</span>
                      </a>
                      <a href="/compare" className="add-compare">
                        <i className="ri-refresh-line"></i>
                        <span>Add To Compare</span>
                      </a>
                      <a href="#!">
                        <i className="ri-share-line"></i>
                        <span>Share</span>
                      </a>
                    </div>

                    <div className="accordion accordion-flush product-accordion" id="accordionFlushExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                          >
                            Product Description
                          </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse">
                          <div className="accordion-body">
                            <p>
                              {product.name} offers a complete wardrobe essential for the modern shopper. Crafted from premium
                              material for comfort and performance, it pairs easily with everything already in your closet.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="true"
                          >
                            Information
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse show">
                          <div className="accordion-body">
                            <div className="bordered-box border-0 mt-0 pt-0">
                              <h4 className="sub-title">product Info</h4>
                              <ul className="shipping-info">
                                <li>
                                  <span>SKU: </span>SP{product.id}8 (COPY)
                                </li>
                                <li>
                                  <span>Unit: </span>1 Item
                                </li>
                                <li>
                                  <span>Weight: </span>150 Gms
                                </li>
                                <li>
                                  <span>Stock Status: </span>In stock
                                </li>
                                <li>
                                  <span>Quantity: </span>40 Items Left
                                </li>
                              </ul>
                            </div>
                            <div className="dashed-border-box mb-0">
                              <h4 className="sub-title">Guaranteed Safe Checkout</h4>
                              <img className="img-fluid payment-img" alt="" src="/assets/images/product-details/payments.png" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-b-space ratio_asos">
        <div className="container container-lg">
          <div className="title1 section-t-space">
            <h4>exclusive products</h4>
            <h2 className="title-inner1 title-gradient">related products</h2>
          </div>
          <div className="row g-4">
            {related.map((item) => (
              <div className="col-xl-3 col-md-4 col-6" key={item.id}>
                <ProductBox product={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}