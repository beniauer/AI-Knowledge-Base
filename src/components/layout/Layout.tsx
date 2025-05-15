
import { PropsWithChildren } from "react";
import Header from "./Header";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarProvider 
} from "@/components/ui/sidebar";
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

const Layout = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar>
            <SidebarContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      isActive={location.pathname === item.path}
                      asChild
                      tooltip={item.name}
                    >
                      <Link to={item.path} className="flex items-center gap-3 text-sm">
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
          <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </div>
        <div className="fixed bottom-4 right-4">
          <button className="bg-primary text-white rounded px-4 py-2 shadow-lg">
            Chat
          </button>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
