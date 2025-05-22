import SectionMenu from "./SectionMenu";

export default function MenuList({ data }) {
  return (
    <>
      {data.map((section, index) => (
        <SectionMenu key={index} section={section} />
      ))}
    </>
  );
}
