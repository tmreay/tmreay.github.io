import styled from "styled-components";

const ButtonBar = styled.div`
display: flex;
flex-direction: row;

> *:not(:last-child) {
  margin-right: 5px;
}

.MuiIconButton-root {
  color: #f8f8f2;
}
`;

export default ButtonBar;
