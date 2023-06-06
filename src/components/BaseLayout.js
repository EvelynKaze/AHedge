import Sidebar from "./Sidebar";

const BaseLayout = ({ children }) => {
  return (
    <div className="flex relative min-h-max gap-8 bg-gray-100">
      <Sidebar />
      <main className="grow">{children}</main>;
    </div>
  );
};

export default BaseLayout;
