import Articles from "./components/Articles";
import MainBanner from "./components/MainBanner";
import MainHeader from "./components/MainHeader";
import NavBar from "./components/NavBar";
import SideBarLocation from "./components/SideBarLocation";

function App() {
  return (
    <>
      <MainHeader />
      <MainBanner />
      <NavBar />
      <div className="cs-container d-flex gap-5">
        <Articles />
        <SideBarLocation />
      </div>
    </>
  );
}

export default App;
