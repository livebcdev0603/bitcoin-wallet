import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "layout/index";
import { Home } from "pages/index";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
