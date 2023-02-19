import "./Header.css";
import styled from "styled-components";

const Logo = styled.div`
  background-color: orange;
  border-radius: 2px;
  padding-left: 15px
  
`;

export const Header = () => {
  return (
    <>
      <Logo>
        <h1 className="header">Dio Bank</h1>
      </Logo>
    </>
  );
};
