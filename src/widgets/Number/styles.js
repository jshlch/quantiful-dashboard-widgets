import styled from 'styled-components';

export const StyledNumberContainer = styled.div`
  position: relative;
  width: calc(50% - 3.8rem);
  height: 110px;
  overflow: hidden;
  padding: 1.5rem;
  border-radius: 20px;
  background-color: ${(props) => props.backgroundColor};
  filter: ${(props) => `drop-shadow(0px 5px 4.6px ${props.backgroundColor}80)`};
`;
export const StyledNumberTitle = styled.h5`
  margin-bottom: 5px;
  color: #f5fcff;
  font-weight: 500;
`;
export const StyledNumberCounter = styled.h1`
  color: #f5fcff;
  font-size: 3.5em;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const StyledNumberBackgroundIcon = styled.img`
  position: absolute;
  top: 20px;
  right: 10px;
  opacity: 0.05;
`;
