
import { PropsWithChildren } from "react";
import Header from "./Header";
import Navigation from "./Navigation";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Navigation />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
      <div className="fixed bottom-4 right-4">
        <button className="bg-primary text-white rounded px-4 py-2 shadow-lg">
          Chat
        </button>
      </div>
    </div>
  );
};

export default Layout;
