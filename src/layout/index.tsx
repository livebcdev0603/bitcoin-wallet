import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1445px;
  margin: auto;
  background-color: ${(props) => props.theme.colors.background};
  
  & > * {
    width: 100%;
  }
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default Layout;
