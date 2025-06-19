import React, { useRef } from "react";
import axios from "axios";

const ResetFile = ({ file, setProfile }) => {
  const inputRef = useRef(null);

  const click = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const change = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();

    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://port-0-baseball-backend-clone-mc0wwsqha35e654e.sel5.cloudtype.app/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      setProfile(response.data.data.imgPath);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="file-wrapper">
      <h2>프로필 사진</h2>
      <div
        id="profile"
        style={{
          backgroundImage: `url(${
            file === null ? "/images/basic_profile.jpg" : file
          })`,
        }}
      ></div>
      <input type="file" ref={inputRef} onChange={change} />
      <button type="button" onClick={click}>
        변경하기
      </button>
    </div>
  );
};

export default ResetFile;
