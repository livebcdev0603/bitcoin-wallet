import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";

const Wrapper = styled.div`
  max-width: 425px;
  margin: auto;
  border: ${(props) => "1px solid" + props.theme.colors.primary};
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.background};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  & > * {
    width: 100%;
  }
`;

const Layout = () => {
  return (
    <Wrapper>
      <Container id="main">
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </Wrapper>
  );
};

export default Layout;
