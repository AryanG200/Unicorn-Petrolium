import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import QuoteFormSection from "./QuoteFormSection";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

function Layout() {
  const location = useLocation();

  const pathname = location.pathname;

  const isHomePage = pathname === "/"; 

  
 useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="app-layout w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full overflow-x-hidden mobile-main-margin">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      {isHomePage ? <QuoteFormSection /> : null}
      <Footer />
    </div>
  );
}

export default Layout;
