"use client";

import { useEffect, useState } from "react";

export default function SubscribeBox() {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem("mk-subscribe-closed") === "1") setClosed(true);
  }, []);

  if (closed) return null;

  return (
    <div className="cookie-bar left-bottom subscribe-box">
      <h2>hey you !!</h2>
      <p>Join our subscribers list to get the latest updates and special offers delivered directly in your inbox</p>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-solid btn-sm btn-gradient" type="button" id="button-addon2">
          subscribe
        </button>
      </div>
      <a
        href="javascript:void(0)"
        className="btn-close"
        onClick={(event) => {
          event.preventDefault();
          window.sessionStorage.setItem("mk-subscribe-closed", "1");
          setClosed(true);
        }}
      >
        <i className="fa fa-times"></i>
      </a>
    </div>
  );
}