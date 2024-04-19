import { SlLocationPin } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import FollowProfile from "./FollowProfile";
import { data } from "../data/profileData.js";
import { useState } from "react";
import { MdEdit } from "react-icons/md";

function SideBarLocation() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <section className="mt-5 d-flex flex-column gap-4 sidebar d-none d-lg-block">
      <div className="d-flex flex-column gap-4">
        <form className="d-flex border-bottom align-items-center">
          <SlLocationPin />

          <input
            type="text"
            placeholder="Enter the location"
            className="search-input py-2 px-1 fs-6"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {isFocused ? <RxCross1 /> : <MdEdit className="fs-4" />}
        </form>
        <p>
          <HiOutlineExclamationCircle />
          <span className="ps-2 text-secondary">
            Your location will help us serve better and extend a personalised
            experience.
          </span>
        </p>
      </div>
      <div className="d-flex flex-column gap-3">
        <h6 className="py-3">
          <MdOutlineThumbUpOffAlt className="fs-4 pe-1" />
          RECOMMENDED GROUPS
        </h6>
        {data.map((data) => {
          return <FollowProfile key={crypto.randomUUID()} {...data} />;
        })}
      </div>
    </section>
  );
}

export default SideBarLocation;
