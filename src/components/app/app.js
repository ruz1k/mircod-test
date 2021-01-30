import "antd/dist/antd.css";
import '../../App.css';
import Header from "../header/header";
import RoutePages from "../route/route";
import ModalBlock from "../modal/modal";

function App() {
  return (
      <>
        <Header />
        <RoutePages />
        {/*<Footer />*/}
        <ModalBlock />
      </>
  );
}

export default App;
