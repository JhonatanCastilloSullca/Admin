const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`w-64 bg-PrimaryWhite border-2 border-b-0 border-PrimaryGray transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full hidden"}`}
    >
      Sidebar
    </aside>
  );
};

export default Sidebar;
