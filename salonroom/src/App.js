
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HairCuts from "./components/HairCuts";
import Hairstyles from "./components/Hairstyles";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import SweetFifteen from "./components/SweetFifteen";
// import ModelHairStyles from "./components/ModelHairStyles";
import Modelscuts from "./components/Modelscuts";
import HairUpdos from "./components/HairUpdos";
import ColorHair from "./components/ColorHair";
import Straighthair from "./components/Straighthair";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Home />
        <SocialLinks />
        
        <HairCuts />
        <Hairstyles />
        <SweetFifteen />
        <ColorHair />
        <Modelscuts />
        <HairUpdos />
        <Straighthair />

        <ContactUs />
        <Footer />



      </div>


      
    </>

    

  );
};

export default App;
