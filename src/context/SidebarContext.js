import { createContext, useState, useContext } from "react";

const initialValue = { isCollapsed: false };

const SidebarContext = createContext(initialValue);

// export function useSidebarContext(){
//   return useContext(SidebarContext)
// }

const SidebarProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebarcollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarcollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
