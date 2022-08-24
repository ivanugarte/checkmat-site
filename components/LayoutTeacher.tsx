import Footer from "./layout/footer/Footer";
import Navbar from "./layout/navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};
