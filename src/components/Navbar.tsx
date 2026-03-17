import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Mail } from "lucide-react";

const navItems = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/parcours", label: "Parcours", icon: User },
  { to: "/portfolio", label: "Portfolio", icon: Briefcase },
  { to: "/contact", label: "Contact", icon: Mail },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="font-mono text-sm font-semibold text-foreground tracking-tight">
          G.Donnier
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                pathname === to
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
