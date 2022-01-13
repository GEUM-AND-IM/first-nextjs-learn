import NavBar from "./NavBar";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
