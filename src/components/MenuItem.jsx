import { NavLink, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import UpChevronIcon from "./icons/UpChevronIcon";
import DownChevronIcon from "./icons/DownChevronIcon";

export default function MenuItem({ item }) {
  const submenuRef = useRef(null);
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const location = useLocation();

  const isSubmenuActive = hasSubmenu && item.submenu.some(
    subItem => subItem.to && location.pathname === subItem.to
  );

  const [open, setOpen] = useState(isSubmenuActive);

  const linkClasses = ({ isActive }) =>
    `text-sm w-full flex items-center gap-2 px-2 py-1 font-semibold rounded-md cursor-pointer ${isActive ? "bg-PrimaryShadowWhite text-PrimaryBlue" : "text-PrimaryBlue hover:bg-PrimaryShadowWhite"
    }`;

  return (
    <li className={`${hasSubmenu ? "flex flex-col" : "flex"}`}>
      {hasSubmenu ? (
        <>
          <div
            className="w-full flex justify-between items-center px-2 py-1 cursor-pointer hover:bg-PrimaryShadowWhite rounded-md"
            onClick={() => setOpen(!open)}
          >
            <span className="text-PrimaryBlue flex items-center gap-2 text-sm gap-x-4">
              {item.icono} {item.label}
            </span>
            <span>{open ? <UpChevronIcon size={20} /> : <DownChevronIcon size={20} />}</span>
          </div>
          <div
            ref={submenuRef}
            className={`text-sm transition-all duration-300 ease-in-out overflow-hidden ps-8 w-full flex flex-col gap-2 text-PrimaryBlue ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            {item.submenu.map((subItem, i) =>
              subItem.to ? (
                <NavLink key={i} to={subItem.to} className={linkClasses}>
                  {subItem.label}
                </NavLink>
              ) : (
                <span key={i} className="px-2 py-1 ">
                  {subItem.label}
                </span>
              )
            )}
          </div>
        </>
      ) : item.to ? (
        <NavLink to={item.to} className={linkClasses}>
          {item.icono} {item.label}
        </NavLink>
      ) : (
        <span className="text-PrimaryBlue flex items-center gap-2 text-sm gap-x-4 px-2 py-1 hover:bg-PrimaryShadowWhite rounded-md">
          {item.icono} {item.label}
        </span>
      )}
    </li>
  );
}
