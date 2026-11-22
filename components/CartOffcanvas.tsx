"use client";

import { useEffect, useState, type MouseEvent } from "react";
import type { CartItem } from "@/lib/types";

const initialItems: CartItem[] = [
  { key: "couture-edge", name: "Couture Edge", price: 6.74, qty: 1, image: "/assets/images/fashion-1/product/5.jpg", editable: true },
  { key: "classic-jacket", name: "Classic Jacket", price: 7.84, qty: 1, image: "/assets/images/fashion-1/product/13.jpg", editable: false },
  { key: "urban-chic", name: "Urban Chic", price: 3.84, qty: 2, image: "/assets/images/fashion-1/product/12.jpg", editable: false },
];

export default function CartOffcanvas() {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [subTotal, setSubTotal] = useState(36.74);

  useEffect(() => {
    const count = items.reduce((total, item) => total + item.qty, 0);
    document.querySelectorAll(".cart_qty_cls").forEach((node) => {
      node.textContent = String(count);
    });
  }, [items]);

  const changeQty = (key: string, amount: number): void => {
    setItems((current) =>
      current.map((item) => (item.key === key ? { ...item, qty: Math.max(1, item.qty + amount) } : item))
    );
    const next = items.map((item) => (item.key === key ? { ...item, qty: Math.max(1, item.qty + amount) } : item));
    setSubTotal(next.reduce((total, item) => total + item.price * item.qty, 0));
  };

  const removeItem = (key: string): void => {
    const next = items.filter((item) => item.key !== key);
    setItems(next);
    setSubTotal(next.reduce((total, item) => total + item.price * item.qty, 0));
  };

  const clearCart = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    setItems([]);
    setSubTotal(0);
  };

  return (
    <div className="offcanvas offcanvas-end cart-offcanvas" tabIndex={-1} id="cartOffcanvas">
      <div className="offcanvas-header">
        <h3 className="offcanvas-title">My Cart ({items.reduce((total, item) => total + item.qty, 0)})</h3>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas">
          <i className="ri-close-line"></i>
        </button>
      </div>
      <div className="offcanvas-body">
        <div className="pre-text-box">
          <p>spend $20.96 More And Enjoy Free Shipping!</p>
          <div className="progress" role="progressbar">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "58.08%" }}>
              <i className="ri-truck-line"></i>
            </div>
          </div>
        </div>

        <div className="sidebar-title">
          <a href="#!" onClick={clearCart}>
            Clear Cart
          </a>
        </div>

        <div className="cart-media">
          <ul className="cart-product">
            {items.map((item) => (
              <li key={item.key}>
                <div className="media">
                  <a href={`/product/${item.key}`}>
                    <img src={item.image} className="img-fluid" alt={item.name} />
                  </a>
                  <div className="media-body">
                    <a href={`/product/${item.key}`}>
                      <h4>{item.name}</h4>
                    </a>
                    <h4 className="quantity">
                      <span>
                        {item.qty} x ${item.price.toFixed(2)}
                      </span>
                    </h4>
                    <div className="qty-box">
                      <div className="input-group qty-container">
                        <button className="btn qty-btn-minus" onClick={() => changeQty(item.key, -1)}>
                          <i className="ri-subtract-line"></i>
                        </button>
                        <input type="number" readOnly name="qty" className="form-control input-qty" value={item.qty} />
                        <button className="btn qty-btn-plus" onClick={() => changeQty(item.key, 1)}>
                          <i className="ri-add-line"></i>
                        </button>
                      </div>
                    </div>
                    <div className="close-circle">
                      {item.editable ? (
                        <button className="close_button edit-button" data-bs-toggle="modal" data-bs-target="#variationModal">
                          <i className="ri-pencil-line"></i>
                        </button>
                      ) : null}
                      <button className="close_button delete-button" type="button" onClick={() => removeItem(item.key)}>
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <ul className="cart_total">
            <li>
              <div className="total">
                <h5>
                  Sub Total : <span>${subTotal.toFixed(2)}</span>
                </h5>
              </div>
            </li>
            <li>
              <div className="buttons">
                <a href="/cart" className="btn view-cart">
                  View Cart
                </a>
                <a href="/checkout" className="btn checkout">
                  Check Out
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}