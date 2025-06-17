import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const groupedArray = (data) => {
  return data.reduce((acc, item) => {
    if (!acc[item.region]) acc[item.region] = [];
    acc[item.region].push(item);
    return acc;
  }, {});
};

export const localInit = () => {
  if (!localStorage.getItem("member-data")) {
    localStorage.setItem(
      "member-data",
      JSON.stringify([
        {
          idx: 1,
          uid: "admin",
          pwd: "1111",
          userName: "kim",
          email: "a@naver.com",
          phone: "01011111111",
        },
      ])
    );
  }
};
