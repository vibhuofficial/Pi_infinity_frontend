import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import "./Header.scss";
import Search from "./Search/Search";
import { AppContext } from "../../App";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import { Button } from "@mui/material";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const signOut = () => {
    Context.signOut();
    history("/");
  };

  const context = useContext(AppContext);

  const history = useNavigate();

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            Pi Infinity
          </div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />

            {context.isLogin === "true" ? (
              <Button onClick={signOut}>
                <FaRegUser />
                Sign Out
              </Button>
            ) : (
              <Button onClick={() => navigate("/signIn")}>
                <FaRegUser />
                Sign In
              </Button>
            )}

            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <LuShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
