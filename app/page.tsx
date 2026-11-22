import ProductBox from "@/components/ProductBox";
import {
  blogPosts,
  collectionBanners,
  dealTiles,
  gradientCategories,
  instagramImages,
  patternCategories,
  products,
  smallBanners,
} from "@/lib/data";

const productTabs: { id: string; title: string; active: boolean }[] = [
  { id: "tab-4", title: "New Products", active: true },
  { id: "tab-5", title: "Featured Products", active: false },
  { id: "tab-6", title: "Best Sellers", active: false },
];

const sliderProducts = [products[3], products[5], products[1], products[4], products[7]];

export default function HomePage() {
  return (
    <main>
      {/* Home slider */}
      <section className="p-0">
        <div className="slider-animate home-slider">
          {[1, 2].map((slide) => (
            <div key={slide}>
              <div className="home height-apply p-bottom">
                <img src={`/assets/images/gradient/slider/${slide}.jpg`} alt="" className="bg-img blur-up lazyload" />
                <div className="container-lg">
                  <div className="row">
                    <div className="col">
                      <div className="slider-contain height-apply">
                        <div>
                          <h4>save 30%</h4>
                          <h1>special products</h1>
                          <a href="/shop" className="btn btn-solid btn-gradient animated">
                            shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Home slider end */}

      {/* category section start */}
      <section>
        <div className="container container-lg">
          <div className="row margin-default ratio_square">
            {gradientCategories.map((category, index) => (
              <div className="col-xl-2 col-md-3 col-sm-4 col-6" key={category.name}>
                <a href="/shop">
                  <div className={`gradient-category${index === 1 ? " hover-effect" : ""}`}>
                    <div className="gradient-border">
                      <div className="img-sec">
                        <img src={category.image} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <h4>{category.name}</h4>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* category section end */}

      {/* collection banner */}
      <section className="pb-0 ratio2_1">
        <div className="container container-lg">
          <div className="row partition2">
            {collectionBanners.map((banner) => (
              <div className="col-md-6" key={banner.title}>
                <a href="/shop">
                  <div className="collection-banner p-right text-center">
                    <div className="img-part">
                      <img src={banner.image} className="img-fluid blur-up lazyload bg-img" alt="" />
                    </div>
                    <div className="contain-banner">
                      <div>
                        <h4>{banner.off}</h4>
                        <h2>{banner.title}</h2>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* collection banner end */}

      {/* collection banner start */}
      <section className="banner-goggles ratio2_1 banner-padding">
        <div className="container container-lg">
          <div className="row g-4">
            {smallBanners.map((banner) => (
              <div className="col-md-4" key={banner.title}>
                <a href="/shop">
                  <div className="collection-banner p-right text-end">
                    <div className="img-part">
                      <img src={banner.image} className="img-fluid blur-up lazyload bg-img" alt="" />
                    </div>
                    <div className="contain-banner banner-3">
                      <div>
                        <h4>{banner.off}</h4>
                        <h2>{banner.title}</h2>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* collection banner end */}

      {/* Tab product */}
      <div className="title1 title-fancy section-t-space">
        <h4>exclusive products</h4>
        <h2 className="title-inner1 title-gradient">special products</h2>
      </div>
      <section className="section-b-space pt-0 ratio_asos">
        <div className="container container-lg">
          <div className="row">
            <div className="col">
              <div className="theme-tab">
                <ul className="tabs tab-title">
                  {productTabs.map((tab) => (
                    <li className={tab.active ? "current" : ""} key={tab.id}>
                      <a href={tab.id}>{tab.title}</a>
                    </li>
                  ))}
                </ul>
                <div className="tab-content-cls">
                  {productTabs.map((tab) => (
                    <div id={tab.id} className={tab.active ? "tab-content active default" : "tab-content"} key={tab.id}>
                      <div className="no-slider row five-product">
                        {products.map((product) => (
                          <ProductBox product={product} key={product.id} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tab product end */}

      {/* category section start */}
      <section className="bg-light section-b-space">
        <div className="container-lg container">
          <div className="row margin-default ratio_square ">
            {patternCategories.map((category, index) => (
              <div className="col-xl-2 col-sm-3 col-4" key={category.name}>
                <a href="/shop">
                  <div className={`img-category${index === 1 ? " hover-effect" : ""}`}>
                    <div className={`pattern-bg ${category.bg}`}>
                      <div className="img-sec">
                        <img src={category.image} className="img-fluid bg-img" alt="" />
                      </div>
                    </div>
                    <h4>{category.name}</h4>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* category section end */}

      {/* product slider */}
      <section className="ratio_asos gradient-slider">
        <div className="container container-lg">
          <div className="row">
            <div className="col-12">
              <div className="title1 title-fancy">
                <h4>exclusive products</h4>
                <h2 className="title-inner1 title-gradient">special products</h2>
              </div>
            </div>
            <div className="col">
              <div className="product-5 product-m no-arrow">
                {sliderProducts.map((product) => (
                  <ProductBox product={product} key={product.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* product slider */}

      {/* deal zone section start */}
      <section className="section-b-space">
        <div className="container-lg container">
          <div className="row margin-default ratio_square ">
            {dealTiles.map((tile) => (
              <div className="col-xl-2 col-md-3 col-sm-4 col-4" key={tile.image}>
                <a href="#!">
                  <div className="deal-category">
                    <img src={tile.image} className="img-fluid w-100" alt="" />
                    <div className="deal-content">
                      <div>
                        {tile.lines.map((line, lineIndex) => (
                          <h2 className={lineIndex === tile.lines.length - 1 ? "mb-0" : ""} key={lineIndex}>
                            {line}
                          </h2>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* deal zone section end */}

      {/* Parallax banner */}
      <section className="p-0 pet-parallax">
        <div className="full-banner section-space parallax text-center p-right">
          <img src="/assets/images/gradient/parallax/1.png" alt="" className="bg-img blur-up lazyload" />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="banner-contain">
                  <h2>2024</h2>
                  <h3>fashion trends</h3>
                  <h4>special offer</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Parallax banner end */}

      {/* Parallax banner */}
      <section className="p-0 pet-parallax">
        <div className="full-banner section-space parallax text-center p-left">
          <img src="/assets/images/gradient/parallax/2.png" alt="" className="bg-img blur-up lazyload" />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="banner-contain">
                  <h2>2024</h2>
                  <h3>fashion trends</h3>
                  <h4>special offer</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Parallax banner end */}

      {/* blog section */}
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title1 section-t-space">
              <h4>Recent Story</h4>
              <h2 className="title-inner1">from the blog</h2>
            </div>
          </div>
        </div>
      </div>
      <section className="blog gym-blog pt-0 ratio_115">
        <div className="container container-lg">
          <div className="row">
            <div className="col-md-12">
              <div className="slide-4 no-arrow slick-default-margin">
                {[...blogPosts, blogPosts[0]].map((post, index) => (
                  <div className="col-md-12" key={`${post.image}-${index}`}>
                    <a href="/blog-details">
                      <div className="basic-effect">
                        <div>
                          <img src={post.image} className="img-fluid blur-up lazyload bg-img" alt="" />
                        </div>
                        <span></span>
                      </div>
                    </a>
                    <div className="blog-details">
                      <h4>{post.date}</h4>
                      <a href="/blog-details">
                        <p>{post.title}</p>
                      </a>
                      <h6>by: John Dio , 2 Comment</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog section end */}

      {/* instagram section */}
      <section className="instagram ratio_square gym-parallax">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <h2 className="title-borderless title-gradient"># instagram</h2>
              <div className="slide-7 no-arrow slick-instagram">
                {instagramImages.map((image, index) => (
                  <div key={`${image}-${index}`}>
                    <a href="#!">
                      <div className="instagram-box">
                        <img src={image} className="bg-img" alt="img" />
                        <div className="overlay">
                          <i className="ri-instagram-fill"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* instagram section end */}
    </main>
  );
}