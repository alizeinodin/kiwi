import React, {
  useRef,
  useState,
  useContext,
} from "react";
import "./Nav.css";
import { ScrollContext } from "./../../../components/IntroPage/IntroPage";
import { Link } from "react-router-dom";
const Nav = () => {
  const Context = useContext(ScrollContext);
  const navContainer = useRef(null);
  const linkRef = useRef(null);

  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav
      className={`NavContainer ${showMenu ? "NavContainerActive" : null}`}
      ref={navContainer}
      onClick={() => {
        linkRef.current.style.display = showMenu ? "none" : "flex";
        setShowMenu(!showMenu);
      }}
    >
      <div
        className="NavBtn"
        onClick={() => {
          linkRef.current.style.display = showMenu ? "none" : "flex";
          setShowMenu(!showMenu);
        }}
      >
        <span
          className={`NavBtnLine ${showMenu ? "NavBtnLineActive" : null}`}
        ></span>
      </div>
      <ul className="NavLinks" ref={linkRef}>
        <li className="NavLink">کیوی</li>
        <li
          className="NavLink"
          onClick={() => {
            Context.ScrollCourseIntroductionRef();
          }}
        >
          معرفی دوره
        </li>
        <li
          className="NavLink"
          onClick={() => {
            Context.ScrollCourseTopicsRef();
          }}
        >
          سرفصل‌های دوره
        </li>
        <li
          className="NavLink"
          onClick={() => {
            Context.ScrollIntroducingInstructorRef();
          }}
        >
          مدرس دوره
        </li>
        <li
          className="NavLink"
          onClick={() => {
            Context.ScrollFooterRef();
          }}
        >
          راه‌های ارتباطی
        </li>
        <li className="NavLink">
          <Link to={"/Register"}>ثبت نام</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;