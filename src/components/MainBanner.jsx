import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";

function MainBanner() {
  const [isJoined, setIsJoined] = useState(false);

  const handleJoin = () => {
    if (isJoined) {
      setIsJoined(false);
    } else {
      setIsJoined(true);
    }
  };

  return (
    <main className="main">
      <div className="cs-container d-flex justify-content-lg-end justify-content-between py-5 px-5 px-md-0 flex-column main-content">
        <div className="d-flex justify-content-between d-lg-none ">
          <FaArrowLeftLong className="fs-4" />
          <button
            type="button"
            className="btn text-white border-outline"
            onClick={handleJoin}
          >
            {isJoined ? "Leave Group" : "Join Group"}
          </button>
        </div>
        <div>
          <h1>Computer Engineering</h1>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </main>
  );
}

export default MainBanner;
