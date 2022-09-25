import { Option } from "./index";
import styled from "styled-components";

export const Container = styled.div`
  font-family: "Roboto";

  * {
    margin: 0;
    padding: 0;
  }

  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    object-fit: cover;
  }

  .select-menu .select-btn {
    padding: 10px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75px;
    border-right: 1px solid rgba(0, 0, 0, 0.2 );
  }

  ul li {
    display: flex;
    /* gap: 10px; */
      align-items: center;
      justify-content: space-between;
    padding: 0px 5px;
  }

  ul {
    position: absolute;
    /* width: 100%; */
    /* width: 100%; */
    margin: 0;
    padding: 0;
    height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
    margin-top: 8px;
    border-radius: 4px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 1);
  }

  li {
    cursor: pointer;

    position: relative;
    list-style: none;
    display: flex;
    justify-content: center;
    transition: all 0.5 ease-in-out;
    &:hover {
      background: gray;
    }

  }

  li + li {
    margin-top: 2px;
  }
`;
