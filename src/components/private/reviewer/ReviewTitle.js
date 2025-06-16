import React from "react";

import { IoIosArrowRoundForward } from "react-icons/io";

const ReviewTitle = () => {
  return (
    <div className="rev-tit">
      <h2>고객들의 후기</h2>
      <span>REVIEW BY CUSTOMER</span>
      <p>
        고객들의 자세한 후기입니다.
        <br />꼭 확인하시고 이용 부탁드립니다.
      </p>
      <button>
        <span>후기 더 보기</span>
        <div>
          <IoIosArrowRoundForward size={25} />
        </div>
      </button>
    </div>
  );
};

export default ReviewTitle;
