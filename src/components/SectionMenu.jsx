import MenuItem from "./MenuItem";

export default function SectionMenu({ section }) {
  return (
    <>
      <span className="flex text-sm font-bold text-PrimaryBlue my-2 py-2">{section.seccion}</span>
      <ul className="flex flex-col gap-2 mt-2">
        {section.menu.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </>
  );
}
