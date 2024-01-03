import React from "react";
import "./Newsfeed.css";
import { Link } from "react-router-dom";
import exampleimage from "../Assets/Images/example.jpg";
const Newsfeed = () => (
  <section className="newsfeed-wrapper">
    <div className="column-1">
      <Link>
        <img
          alt="Card for Newsfeed"
          src={exampleimage}
          style={{ width: "100%", marginBottom: 20 }}
        />
      </Link>
      <div style={{ display: "flex", gap: 20 }}>
        <Link>
          <img alt="Card for Newsfeed" src={exampleimage} />
        </Link>
        <Link>
          <img alt="Card for Newsfeed" src={exampleimage} />
        </Link>
      </div>
    </div>
    <div className="column-2">
      <Link>
        <img alt="Card for Newsfeed" src={exampleimage} />
      </Link>
      <Link>
        <img alt="Card for Newsfeed" src={exampleimage} />
      </Link>
    </div>
    <div className="column-3">
      <Link>#Hellothisisabighashtag</Link>
      <Link>#Hellothisisabighashtag</Link>
      <Link>#Hellothisisabighashtag</Link>
      <Link>#Hellothisisabighashtag</Link>
      <Link>#Hellothisisabighashtag</Link>
      <Link>#Hellothisisabighashtag</Link>
      <Link>#Hellothisisabighashtag</Link>
      <Link>#123</Link>
      <Link>#123</Link>
      <Link>#123</Link>
      <Link>#123</Link>
      <Link>#123</Link>
      <Link
        className="login-button"
        to=""
        style={{
          backgroundColor: "#0089d1",
          borderColor: "#0089d1",
          alignSelf: "flex-end",
        }}
      >
        See All
      </Link>
    </div>
  </section>
);

export default Newsfeed;
