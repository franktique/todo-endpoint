import styled, { css, keyframes } from "styled-components";
import { StyledTodoItemProps } from "../../types";

export const StyledTodoItem = styled.div<StyledTodoItemProps>`
  display: flex;
  flex-direction: row;
  background: white;
  color: black;
  border: 2px solid #e8e8e8;
  font-size: 16px;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  margin-bottom: 6px;
  padding: 3px 10px;

  ${(props) =>
    props.overDue &&
    css`
      background: pink;
      border: 2px solid white;
      color: white;
    `}

  ${(props) =>
    props.isComplete &&
    css`
      background: green;
      border: 2px solid white;
      color: white;
    `}
`;

export const StyledDateDiv = styled.div<StyledTodoItemProps>`
  background: white;
  color: black;
  border: 2px solid black;
  padding: 3px 3px;
  margin-left: auto;

  ${(props) =>
    props.overDue &&
    css`
      background: pink;
      border: 2px solid white;
      color: white;
    `}

  ${(props) =>
    props.isComplete &&
    css`
      background: green;
      border: 2px solid white;
      color: white;
    `}
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: ${spin} 2s linear infinite;
`;
