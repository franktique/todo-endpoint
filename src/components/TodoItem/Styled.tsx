import styled, { css } from 'styled-components';
import {StyledTodoItemProps} from '../../types';

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
  

  ${props => props.overDue && css`
      background: pink;
      border: 2px solid white;
      color: white;
  `}

  ${props => props.isComplete && css`
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

  ${props => props.overDue && css`
      background: pink;
      border: 2px solid white;
      color: white;
  `}

  ${props => props.isComplete && css`
      background: green;
      border: 2px solid white;
      color: white;
  `}
`;
