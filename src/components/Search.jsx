import React from "react";
// import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = (CartItem) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <section className="">
        <div className="">
          <div className="">
            <i className="fa fa-search"></i>
            {/* <center> */}
            <FontAwesomeIcon icon="fa-search" spin />
            <input
              type="text"
              placeholder="What are you looking for with SMECO"
            />

            {/* <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div> */}
            {/* <span>All Category</span> */}
            {/* </center> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
