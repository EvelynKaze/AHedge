import { createContext, useState, useContext } from "react";

const initialValue = { isCollapsed: true };

const SidebarContext = createContext(initialValue);

// export function useSidebarContext(){
//   return useContext(SidebarContext)
// }

const SidebarProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

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
