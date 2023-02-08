import "./scss/style.scss";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Banner from "./components/Banner";
import image from "./assets/images/illustration-editor-mobile.svg";
import imageTwo from "./assets/images/illustration-laptop-mobile.svg";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Content title="Designed for	the future" image={image} firstContentTitle="Introducing an extensible editor" secondContentTitle="Robust content management" firstP="Blogr	features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog." secondP="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality you're in full control." />
      <Banner />
      <Content image={imageTwo} firstContentTitle="Free, open, simple" secondContentTitle="Powerful tooling" firstP="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn." secondP="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites." />
      <Footer />
    </div>
  );
}

export default App;
