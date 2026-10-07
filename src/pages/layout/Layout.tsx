import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const Layout = () => {
  useScrollToTop();

  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Layout;
