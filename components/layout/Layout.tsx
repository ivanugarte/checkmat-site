import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Flags from "./common/Flags";
import About from "../about/About";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
        <Flags />
        <About />
      </main>

      <Footer />
    </>
  );
};
