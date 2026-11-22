import { slugify } from "@/lib/data";
import type { Product } from "@/lib/types";

export function productHref(product: Product): string {
  return `/product/${slugify(product.name)}`;
}

export default function ProductBox({ product }: { product: Product }) {
  const href = productHref(product);
  return (
    <div className="product-box">
      <div className="img-wrapper">
        {product.sale ? (
          <div className="lable-block">
            <span className="lable-gradient">new</span> <span className="lable4">on sale</span>
          </div>
        ) : null}
        <a href={href}>
          <img src={product.image} className="img-fluid blur-up lazyload bg-img" alt="" />
        </a>
        <div className="cart-box cart-box-bottom">
          <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart">
            <i className="ri-shopping-cart-line"></i>
          </button>
          <a href="#!" title="Add to Wishlist">
            <i className="ri-heart-line"></i>
          </a>
          <a href="#quickView" data-bs-toggle="modal" title="Quick View">
            <i className="ri-search-line"></i>
          </a>
          <a href="/compare" title="Compare">
            <i className="ri-loop-left-line"></i>
          </a>
        </div>
      </div>
      <div className="product-detail">
        <div className="detail-inline">
          <a href={href}>
            <h6>{product.name}</h6>
          </a>
          <h4>${product.price.toFixed(2)}</h4>
        </div>
        <ul className="color-variant pt-0">
          <li className="bg-light0"></li>
          <li className="bg-light1"></li>
          <li className="bg-light2"></li>
        </ul>
      </div>
    </div>
  );
}