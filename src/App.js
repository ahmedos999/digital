import About from "./components/About";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Main></Main>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Footer></Footer>
     </div>
  );
}

export default App;
