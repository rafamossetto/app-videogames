import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Questrial;
  color: #e8e8e8;
  .wilsonNumber {
    font-size: 130px;
    display: flex;
    align-items: center;
    margin-bottom: 0px;
  }
  .wilsonImg {
    width: 130px;
    height: 130px;
  }
  button {
    background-color: #f05454;
    font-family: Questrial;
    color: #e8e8e8;
    border: none;
    cursor: pointer;
    height: 24px;
    border-radius: 7px;
    box-shadow: inset 2px 3px 5px rgba(0, 0, 0, 0.3),
      inset -2px -3px 5px rgba(0, 0, 0, 0.5);
    &:focus {
      box-shadow: inset -2px -3px 5px rgba(0, 0, 0, 0.3),
        inset 2px 3px 5px rgba(0, 0, 0, 0.5);
    }
  }
`;

export default Div;
