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
  justify-content: space-between;

  position: relative;
  height: 100vh;
`;

export const Content = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Container id="main">
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Container>
    </Wrapper>
  );
};

export default Layout;
