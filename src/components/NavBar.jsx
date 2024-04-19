import { useState } from "react";
import peopleAdd from "../assets/icon.svg";
import { IoMdExit } from "react-icons/io";

function NavBar() {
  const [isJoined, setIsJoined] = useState(false);

  const handleJoin = () => {
    if (isJoined) {
      setIsJoined(false);
    } else {
      setIsJoined(true);
    }
  };

  return (
    <>
      <nav className="header py-3 d-none d-lg-block">
        <div className="cs-container d-flex justify-content-between border-bottom">
          <ul className="navbar-nav d-flex flex-row gap-3 align-items-center text-secondary">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                All Posts(32)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Article
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Event</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Job</a>
            </li>
          </ul>
          <div className="d-flex gap-3 align-items-center">
            <div className="dropdown">
              <button
                className="btn btn-light fw-bold dropdown-toggle bg-slate-100"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Write a Post
              </button>
            </div>

            <button
              type="button"
              className={`btn ${
                isJoined ? "text-slate-100" : "btn-primary"
              } d-flex align-items-center gap-2`}
              onClick={handleJoin}
            >
              {isJoined ? <IoMdExit /> : <img src={peopleAdd} alt="" />}
              <span>{isJoined ? "Leave Group" : "Join Group"}</span>
            </button>
          </div>
        </div>
      </nav>
      <div className="cs-container d-flex justify-content-between d-lg-none px-5 px-md-0">
        <ul className="navbar-nav d-flex flex-row gap-3 align-items-center text-secondary">
          <li className="nav-item">
            <a className="nav-link fw-bold text-black" href="#">
              Posts (368)
            </a>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <div className="dropdown">
            <button
              className="btn btn-light fw-bold dropdown-toggle bg-slate-100"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
