"use client";

import { useEffect } from "react";

const skeletonCategories = Array.from({ length: 6 });
const skeletonBanners = Array.from({ length: 2 });
const skeletonSmallBanners = Array.from({ length: 3 });

export default function LoaderSkeleton() {
  useEffect(() => {
    const element = document.querySelector<HTMLElement>(".loader_skeleton");
    const timer = window.setTimeout(() => {
      if (!element) return;
      element.style.transition = "opacity .5s ease";
      element.style.opacity = "0";
      window.setTimeout(() => element.remove(), 600);
    }, 800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="loader_skeleton">
      <header className="header-tools zindex-up header-style top-relative">
        <div className="logo-menu-part">
          <div className="container container-lg border-bottom-0 rounded-5">
            <div className="row">
              <div className="col-sm-12">
                <div className="main-menu">
                  <div className="menu-left">
                    <div className="brand-logo">
                      <a href="/">
                        <img src="/assets/images/gradient/logo.png" className="img-fluid blur-up lazyload" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="menu-right pull-right">
                    <div>
                      <nav>
                        <div className="toggle-nav">
                          <i className="ri-bar-chart-horizontal-line sidebar-bar"></i>
                        </div>
                        <ul className="sm pixelstrap sm-horizontal">
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li className="mega">
                            <a href="#!">
                              feature <div className="lable-nav">new</div>
                            </a>
                          </li>
                          <li>
                            <a href="#!">shop</a>
                          </li>
                          <li>
                            <a href="#!">product</a>
                          </li>
                          <li>
                            <a href="#!">pages</a>
                          </li>
                          <li>
                            <a href="#!">blog</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="top-header">
                      <ul className="header-dropdown">
                        <li className="mobile-wishlist">
                          <a href="#!">
                            <i className="ri-heart-line"></i>
                          </a>
                        </li>
                        <li className="onhover-dropdown mobile-account">
                          <i className="ri-user-line"></i>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="icon-nav d-none d-sm-block">
                        <ul>
                          <li className="onhover-div mobile-search">
                            <div>
                              <i className="ri-search-line"></i>
                            </div>
                          </li>
                          <li className="onhover-div mobile-setting">
                            <div>
                              <i className="ri-settings-2-line"></i>
                            </div>
                          </li>
                          <li className="onhover-div mobile-cart">
                            <div>
                              <i className="ri-shopping-cart-line"></i>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="home-slider">
        <div className="home"></div>
      </div>
      <section>
        <div className="container container-lg">
          <div className="row margin-default ratio_square">
            {skeletonCategories.map((_, index) => (
              <div className="col-xl-2 col-md-3 col-sm-4 col-6" key={index}>
                <a href="#!">
                  <div className="gradient-category">
                    <div className="gradient-border"></div>
                    <h4></h4>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-0 ratio2_1">
        <div className="container container-lg">
          <div className="row partition2">
            {skeletonBanners.map((_, index) => (
              <div className="col-md-6" key={index}>
                <a href="#!">
                  <div className="collection-banner p-right text-center">
                    <div className="ldr-bg">
                      <div className="contain-banner">
                        <div>
                          <h4></h4>
                          <h2></h2>
                          <h6></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="banner-goggles ratio2_1 banner-padding">
        <div className="container container-lg">
          <div className="row g-4">
            {skeletonSmallBanners.map((_, index) => (
              <div className="col-md-4" key={index}>
                <a href="#!">
                  <div className="collection-banner p-right text-end">
                    <div className="ldr-bg">
                      <div className="contain-banner banner-3">
                        <div>
                          <h4></h4>
                          <h2></h2>
                          <h6></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}