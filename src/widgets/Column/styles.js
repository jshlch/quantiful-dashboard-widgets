import styled from 'styled-components';

export const StyledColumnContainer = styled.div`
  flex: ${(props) => props.size};
  padding: 1.7rem;
  border-radius: 25px;
  background-color: white;
  filter: drop-shadow(0px 4px 7.7px rgba(187, 229, 251, 0.52));
`;
export const StyledColumnHeading = styled.div`
  margin-bottom: 15px;
`;
export const StyledColumnContent = styled.div`
  ${(props) =>
    props.type.toLowerCase() === 'number'
      ? 'display: flex; row-gap: 1.5rem; column-gap: 1.5rem; flex-wrap: wrap; justify-content: space-between;'
      : 'display: flex; flex-direction: column; row-gap: 20px;'}
`;
