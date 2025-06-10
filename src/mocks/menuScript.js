export const menuData = [
  {
    id: 1,
    menuFirst: "메인",
    menuLink: "/",
    menuSecond: [],
  },
  {
    id: 2,
    menuFirst: "예약하기",
    menuLink: "/reservation",
    menuSecond: [],
  },
  {
    id: 3,
    menuFirst: "구단 이동",
    menuLink: "/move",
    menuSecond: [
      {
        secondLink: "/move/samsung",
        secondName: "삼성 라이온즈",
      },
      {
        secondLink: "/move/lotte",
        secondName: "롯데 자이언츠",
      },
      {
        secondLink: "/move/twins",
        secondName: "LG 트윈스",
      },
    ],
  },
  {
    id: 4,
    menuFirst: "구독하기",
    menuLink: "/sub",
    menuSecond: [],
  },
  {
    id: 5,
    menuFirst: "커뮤니티",
    menuLink: "/community",
    menuSecond: [],
  },
];
