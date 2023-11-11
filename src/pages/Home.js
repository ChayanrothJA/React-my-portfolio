import AboutContainer from "../components/About/About";
import ContactContainer from "../components/Contact/ContactContainer";
import ContainerHero from "../components/Hero/Hero.js";
import GetInTouchContainer from "../components/GetInTouch/GetInTouchContainer";
import PortfolioCard from "../components/Navigation/Navigation.js";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <ContainerHero />
      <AboutContainer />
      <ContactContainer />
      <GetInTouchContainer />
      <PortfolioCard />
    </div>
  );
};

export default Home;
