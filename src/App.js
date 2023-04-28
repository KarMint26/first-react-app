import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Superhero from "./components/Superhero";
import SciFi from "./components/SciFi";
import ButtonBackTop from "./components/ButtonBackTop";
import Footer from "./components/Footer";
import "./style/landingPage.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const mybutton = document.getElementById("myBtn");

    window.onscroll = () => {
      if (
        document.body.scrollTop > 25 ||
        document.documentElement.scrollTop > 25
      ) {
        if (mybutton) {
          mybutton.style.display = "flex";
        }
      } else {
        if (mybutton) {
          mybutton.style.display = "none";
        }
      }
    };
  });

  return (
    <div>
      <ButtonBackTop />
      {/* Intro Section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End of Intro */}

      {/* Trending Section */}
      <div className="superhero" id="superhero">
        <Superhero />
      </div>
      {/* End of Trending Section */}

      {/* Trending Section */}
      <div className="sci-fi" id="sci-fi">
        <SciFi />
      </div>
      {/* End of Trending Section */}
      <Footer />
    </div>
  );
}

export default App;
