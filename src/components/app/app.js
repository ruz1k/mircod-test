import "antd/dist/antd.css";
import '../../app.css';
import Header from "../header/header";
import RoutePages from "../route/route";
import ModalBlock from "../modal/modal";
import Footer from "../footer/footer";

function App() {
  return (
      <>
        <Header />
        <RoutePages />
        <Footer />
        <ModalBlock />
      </>
  );
}

export default App;
