import axios from "axios";
import React, { useRef } from "react";
import useLoading from "../../../store/useLoading";

const JoinFile = ({ imgPath, setImgPath }) => {
  const { setProfileLoading } = useLoading();

  const inputRef = useRef(null);

  const change = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);

    try {
      setProfileLoading(true);
      document.body.classList.add("dimmed");
      const response = await axios.post(
        "https://port-0-baseball-backend-clone-mc0wwsqha35e654e.sel5.cloudtype.app/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setImgPath(response.data.data.imgPath);
    } catch (e) {
      alert("업로드 실패!");
    } finally {
      setProfileLoading(false);
      document.body.classList.remove("dimmed");
    }
  };

  const button = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div id="join-file">
      <h2>프로필 파일 등록</h2>
      <input type="file" ref={inputRef} onChange={change} />
      <button
        type="button"
        style={{
          backgroundImage: `url(${imgPath})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
        onClick={button}
      >
        <span className="sr-only">프로필 사진 올리기</span>
      </button>
    </div>
  );
};

export default JoinFile;
