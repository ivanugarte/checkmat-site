import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Flags from "./common/Flags";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
        <Flags />
      </main>

      <Footer />
    </>
  );
};
