import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Category />
          <Mbody>
            <Pages />
          </Mbody>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

const Mbody = styled('main')`
  min-height: calc(100vh - 300px);
`;

export default App;
