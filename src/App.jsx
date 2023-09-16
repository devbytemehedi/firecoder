import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Circle} from "react-preloaders";
function App() {
  return (
    <>
      <div className="bg-[#0E1316] min-h-screen ">
        <Header />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="dark"
        />
        <Main toast={toast} />
        <Footer />
      </div>
      <Circle background="#0E1316" color="red" />
    </>
  );
}

export default App;
