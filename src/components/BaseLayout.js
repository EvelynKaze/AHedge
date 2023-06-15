import Sidebar from "./Sidebar";

const BaseLayout = ({ children }) => {
  return (
    <div className="flex relative max-h-max gap-8">
      <Sidebar />
      <main className="grow-0 lg:grow">{children}</main>
    </div>
  );
};

export default BaseLayout;
