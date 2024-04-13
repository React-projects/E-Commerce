import NavBarLogin from "./components/Utility/NavBarLogin";
import Footer from "./components/Utility/Footer";
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
