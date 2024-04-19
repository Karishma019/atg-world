import logo from "../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Modal from "../UI/Modal";
import { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import editIcon from "../assets/edit.svg";
import userImg from "../assets/article-author4.png";

function MainHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleAuth = (value) => {
    setIsSignedIn(value);
  };

  function closeModal() {
    setIsModalOpen(false);
  }
  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModalOpen]);

  return (
    <>
      <header className="header d-none d-lg-block">
        <div className="d-flex align-items-center justify-content-around header">
          <a className="fs-2" href="#">
            <img src={logo} alt="showcase" />
          </a>

          <form className="d-flex search-form">
            <IoMdSearch className="fs-4" />

            <input
              type="text"
              placeholder="Search for your favorite groups in ATG"
              className="search-input"
            />
          </form>

          <div className="align-self-center">
            {isSignedIn ? (
              <div className="d-flex align-items-center gap-2">
                <img src={userImg} alt="user" />
                <p className="m-0 fw-bold">Siddharth Goyal</p>
              </div>
            ) : (
              <p className="fs-6 text fw-bold m-0">
                Create account.{" "}
                <span
                  className="text-primary pointer"
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  It's free!{"   "}
                </span>
                <IoMdArrowDropdown className="fs-4" />
              </p>
            )}
          </div>
        </div>
      </header>
      {!isModalOpen && (
        <button
          className="btn edit-icon d-lg-none"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <img src={editIcon} />
        </button>
      )}

      {isModalOpen && (
        <Modal closeModal={closeModal} handleAuth={handleAuth}>
          <SignUpForm closeModal={closeModal} handleAuth={handleAuth} />
        </Modal>
      )}
    </>
  );
}

export default MainHeader;
