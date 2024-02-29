import { styled } from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: linear-gradient(darkviolet, blue);
  width: 50%;
  margin: 2rem;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
`;

export default StyledList;
