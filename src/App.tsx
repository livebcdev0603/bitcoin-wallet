import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Layout from "layout";
import Page from "pages";
import GlobalStyles from "utils/global";
import theme from "utils/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Page.Home />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
