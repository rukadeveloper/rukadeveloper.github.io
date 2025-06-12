import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useCallback,
} from "react";

const SwiperBar = forwardRef((props, ref) => {
  const [isDrag, setIsDrag] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const maxRef = useRef(0);
  const allLength = useRef(0);
  const wrapperLength = useRef(0);
  const fillBarRef = useRef(null);

  const mouseDown = (e) => {
    setIsDrag(true);
    setStartPos(e.clientX);
  };

  const mouseMove = useCallback(
    (e) => {
      if (ref.current && isDrag) {
        const moveX = e.clientX - startPos;
        const newPosX = Math.max(0, Math.min(moveX, maxRef.current));
        ref.current.style.transform = `translateX(-${newPosX}px)`;

        // fillBar 이동 한계 계산
        const maxFillBarMove =
          wrapperLength.current -
          fillBarRef.current.getBoundingClientRect().width;

        // 이동 비율에 맞게 px로 변환
        const percent = newPosX / maxRef.current;
        const fillBarMove = percent * maxFillBarMove;
        fillBarRef.current.style.transform = `translateX(${fillBarMove}px)`;
      }
    },
    [ref, isDrag, startPos]
  );

  const mouseUp = (e) => {
    setIsDrag(false);
  };

  useEffect(() => {
    // 하나 복제할게요.
    if (ref.current && Array.from(ref.current.children).length > 0) {
      const firstElement = ref.current.children[0];
      const cloneElement = firstElement.cloneNode(true);
      ref.current.append(cloneElement);

      const resizeLength = () => {
        const childWidth =
          ref.current.children[0].getBoundingClientRect().width;
        const children = Array.from(ref.current.children);
        allLength.current =
          childWidth * children.length + 16 * (children.length - 1);
        // ref.current.children.하나 길이 * ref.current.children.개수 + 16 * (개수 - 1);
        wrapperLength.current = ref.current.getBoundingClientRect().width;
        fillBarRef.current.style.width = `${
          (wrapperLength.current / allLength.current) * 100
        }%`;
        // 최대 이동거리 저장
        maxRef.current = allLength.current - wrapperLength.current;
      };

      resizeLength();

      const observer = new ResizeObserver(() => {
        resizeLength();
      });

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref]);

  useEffect(() => {
    if (isDrag) {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp);

      // cleanup: 드래그 종료 또는 언마운트 시 이벤트 해제
      return () => {
        window.removeEventListener("mousemove", mouseMove);
        window.removeEventListener("mouseup", mouseUp);
      };
    }
  }, [isDrag, startPos, mouseMove]);

  return (
    <div className="swiper-bar">
      <div
        className="filled-bar"
        style={{ backgroundColor: "black", cursor: "pointer" }}
        ref={fillBarRef}
        onMouseDown={mouseDown}
      />
    </div>
  );
});

export default SwiperBar;
