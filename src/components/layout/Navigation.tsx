
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Search, Library, Star, HelpCircle, Settings } from "lucide-react";

const navItems = [
  {
    name: "Knowledge Search",
    path: "/",
    icon: <Search size={18} />,
  },
  {
    name: "Dokument-Bibliothek",
    path: "/library",
    icon: <Library size={18} />,
  },
  {
    name: "Meine Favoriten",
    path: "/favourites",
    icon: <Star size={18} />,
  },
  {
    name: "FAQ Manager",
    path: "/faqs",
    icon: <HelpCircle size={18} />,
  },
  {
    name: "Admin & Integrationen",
    path: "/admin",
    icon: <Settings size={18} />,
  },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="w-[220px] bg-white h-full border-r">
      <div className="py-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted",
              location.pathname === item.path
                ? "bg-muted text-primary"
                : "text-secondary-foreground"
            )}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
