import React from "react";

import styled from "styled-components";
import ResetTitle from "../../private/reset/ResetTitle";
import ResetInformation from "../../private/reset/ResetInformation";

const Setter = styled.div`
  &#reset-sec {
    padding-top: 90px;
    #reset-inner {
      max-width: 1200px;
      margin: 0 auto;
      .reset-title {
        padding-top: 140px;
        > h2 {
          font-size: 2.5rem;
          padding-bottom: 50px;
        }
      }
      .reset-info {
        form {
          display: block;
          width: 100%;
          fieldset {
            padding: 0;
            margin: 0;
            border: 0;
            border-bottom: 2px solid #000;
            legend {
              padding: 0;
              font-size: 1.5rem;
              padding-bottom: 30px;
            }
          }
          .input-wrapper {
            width: 100%;
            height: 75px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.65);
            display: flex;
            align-items: center;
            padding: 1rem 2rem;
            label {
              padding-right: 20px;
              display: block;
              width: 250px;
            }
            input {
              width: 300px;
              height: 40px;
              border: 1px solid rgba(0, 0, 0, 0.35);
              outline: none;
              padding: 0 1rem;
            }
            button {
              display: block;
              width: 100px;
              height: 40px;
              font-size: 1rem;
              background-color: #fff;
              border: 1px solid #111;
              margin-left: 20px;
              &:disabled {
                opacity: 0.3;
              }
            }
            b {
              font-size: 1rem;
              padding-left: 20px;
              font-weight: 400;
            }
          }
          > .submit {
            width: 100%;
            padding-bottom: 40px;
            button {
              display: block;
              width: 260px;
              height: 60px;
              font-size: 1rem;
              background-color: #000;
              border: 1px solid #111;
              margin: 0 auto;
              margin-top: 30px;
              color: #fff;
              &:disabled {
                opacity: 0.3;
              }
            }
          }
        }
      }
    }
  }
`;

const Reset = () => {
  return (
    <Setter id="reset-sec">
      <div id="reset-inner">
        <ResetTitle />
        <ResetInformation />
      </div>
    </Setter>
  );
};

export default Reset;
