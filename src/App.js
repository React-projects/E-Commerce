import NavBarLogin from "./Components/Utility/NavBarLogin";
import Footer from "./Components/Utility/Footer";
import MainRouter from "./router/MainRouter";

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <MainRouter />
      <Footer />
    </div>
  );
}

export default App;
