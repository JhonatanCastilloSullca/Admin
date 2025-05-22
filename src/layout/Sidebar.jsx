import heroImage from "../assets/imagen/logo-casabell.png";
import DashboardIcon from "../components/icons/DashboardIcon";
import UserIcon from "../components/icons/UserIcon";
import MenuList from "../components/MenuList";

const Sidebar = ({ isOpen }) => {
  const menu = [
    {
      seccion: 'Home 1',
      menu: [
        {
          icono: <DashboardIcon size={20} />,
          label: 'Dashboard',
          to: '/'
        },
        {
          icono: <UserIcon size={20} />,
          label: 'Usuarios',
          submenu: [
            { label: 'Usuarios', to: '/usuarios' },
            { label: 'Submenu 2', to: '/' }
          ],
        },
        {
          icono: <DashboardIcon size={20} />,
          label: 'Menu 3',
          submenu: [{ label: 'Submenu 1', to: '/about' },
          { label: 'Submenu 2', to: '/' }],
        },
      ],
    },

  ];
  return (
    <aside
      className={`transition-all duration-300 ease-in-out overflow-hidden border-1 border-b-0 border-PrimaryWhiteGray bg-PrimaryWhite  
        ${isOpen ? "w-64" : "w-0"}
      `}
    >
      <div className={`${isOpen ? " h-dvh fixed w-64 border-1 border-t-0 border-b-1 border-x-0 flex flex-col" : "hidden w-0"}`}>
        <div className="flex justify-center py-2">
          <img src={heroImage} className="h-10" alt="logo" />
        </div>
        <div className="overflow-y-scroll no-scrollbar flex-1 px-2">
          <div className="px-4">
            <MenuList data={menu} />
          </div>
        </div>
      </div>
    </aside >
  );
};
export default Sidebar;
