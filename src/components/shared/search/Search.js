import React, { useState } from "react";

import styled from "styled-components";

const SearchComp = styled.div`
  position: fixed;
  top: 130px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 40%;
  height: 50px;
  background-color: white;
  border: 1px solid black;
  border-radius: 1.6rem;
  z-index: 150;
  form {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    position: relative;
    > div {
      &:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    > div {
      &:nth-child(2) {
        display: block;
        width: 40%;
        height: 80%;
        margin-left: 1rem;
        padding-top: 3px;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          display: block;
          width: 1px;
          height: 1rem;
          background-color: rgb(220, 220, 220);
          top: 0;
          bottom: 0;
          right: 0;
          margin: auto 0;
        }
        input {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
        }
      }
    }
    > div {
      &:last-child {
        position: absolute;
        width: 7rem;
        height: 80%;
        margin: auto 0;
        top: 0;
        bottom: 0;
        right: 1.5rem;

        > button {
          width: 100%;
          height: 100%;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          svg {
            width: 0.7rem;
            margin-top: 1px;
          }
        }
        > div {
          position: absolute;
          height: 0;
          overflow: hidden;
          top: 100%;
          left: 0;
          width: 110%;
          display: flex;
          flex-direction: column;
          transition: height ease-in-out 0.6s;
          &.active {
            height: 190px;
          }
          button {
            width: 100%;
            margin-bottom: 10px;
            padding: 0.4rem 0;
            background-color: #ccc;
            border-radius: 6px;
            color: white;
            transition: all ease-in-out 0.6s;
            &:hover {
              background-color: #236ff2;
            }
          }
        }
      }
    }
  }
`;

const Search = () => {
  const teamArray = ["LG", "KT", "한화", "기아"];
  const [isTeam, setIsTeam] = useState(false);
  const [clickedTeam, setClickedTeam] = useState("구단명");

  const teamClick = () => {
    setIsTeam((prev) => !prev);
  };

  const teamClick2 = (team) => {
    setIsTeam(false);
    setClickedTeam(team);
  };

  return (
    <SearchComp className="search-component">
      <form>
        <div>
          <img
            src="/images/svg/vuesax/linear/search-normal.png"
            alt="search__icon"
          />
        </div>
        <div>
          <input type="text" placeholder="검색어를 입력해주세요." />
        </div>
        <div>
          <button type="button" onClick={teamClick}>
            <span>{clickedTeam}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div className={`${isTeam ? "active" : ""}`}>
            {teamArray.map((team, i) => (
              <button
                key={i}
                onClick={() => {
                  teamClick2(team);
                }}
                type="button"
              >
                {team}
              </button>
            ))}
          </div>
        </div>
      </form>
    </SearchComp>
  );
};

export default Search;
