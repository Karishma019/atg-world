import { BsThreeDots } from "react-icons/bs";
import { IoShareSocial } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { MdDateRange } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";

function Article({
  authorBg,
  authorImg,
  category,
  authorName,
  title,
  description,
  date,
  location,
  btnContent,
}) {
  return (
    <div>
      <div className="card mt-4 w-100 shadow-sm">
        {authorBg && <img src={authorBg} className="card-img-top" alt="..." />}
        <div className="card-body">
          <p className="fw-bold">{category}</p>
          <h5 className="card-title d-flex justify-content-between align-items-center">
            <span>{title}</span>
            <div className="dropdown articleHeading">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BsThreeDots className="fs-3" />
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Edit
                </a>
                <a className="dropdown-item" href="#">
                  Report
                </a>
                <a className="dropdown-item" href="#">
                  Option 3
                </a>
              </div>
            </div>
          </h5>
          {description && <p className="card-text">{description}</p>}

          {date && (
            <p className="card-text d-flex gap-5 fw-bold align-items-center">
              <span>
                {category === "💼️ Job" ? (
                  <IoBagOutline className="fs-5" />
                ) : (
                  <MdDateRange className="fs-5" />
                )}
                {date}
              </span>
              <span>
                <SlLocationPin />
                {location}
              </span>
            </p>
          )}
          {btnContent && (
            <button
              className={`btn ${
                category === "💼️ Job" ? "text-success" : "text-danger"
              } border fw-bold w-100 mb-4`}
            >
              {btnContent}
            </button>
          )}
          <div className="d-flex align-items-center justify-content-between gap-3">
            <img src={authorImg} alt={authorName} />
            <div className="d-flex w-100 justify-content-lg-between flex-column">
              <p className="m-0 fw-bold">{authorName}</p>
              <p className="m-0">
                <IoEyeOutline />
                1.4k views
              </p>
            </div>
            <button className="btn bg-slate-100">
              <IoShareSocial className="fs-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
