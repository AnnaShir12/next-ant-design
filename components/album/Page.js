import Footer from "./Footer";
import Header from "./Header";

export default ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <style jsx>
      {`
        h1 {
          text-align: center;
        }
      `}
    </style>
  </>
);
