import React, { useState } from "react";

function FollowProfile({ name, img }) {
  const [isFollowed, setIsFollowed] = useState(false);

  const followProfile = () => {
    if (isFollowed) {
      setIsFollowed(false);
    } else {
      setIsFollowed(true);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <img src={img} alt={name} />
          <p className="m-0 fw-medium">{name}</p>
        </div>
        <button
          className={`btn ${
            isFollowed ? "bg-black text-white" : "bg-slate-100"
          } fw-semibold follow-btn`}
          onClick={followProfile}
        >
          {isFollowed ? "Followed" : "Follow"}
        </button>
      </div>
    </>
  );
}

export default FollowProfile;
