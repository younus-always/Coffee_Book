import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
      return (
            <>
                  <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                        theme="light"
                        transition:Bounce
                  />
                  <Navber />
                  <section className="min-h-[calc(100vh-228px)] py-12 w-11/12 mx-auto">
                        <Outlet />
                  </section>
                  <Footer />
            </>
      );
};

export default Layout;