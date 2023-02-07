import "./scss/style.scss";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Content title="Designed for the future" />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
