import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Outlet />
    <footer className="border-t border-border py-8">
      <div className="container">
        <p className="text-xs text-muted-foreground text-center">
          © 2025 Gabin Donnier — BTS SIO SISR — Lycée Saint-Marc
        </p>
      </div>
    </footer>
  </div>
);

export default Layout;
