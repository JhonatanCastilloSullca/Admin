const Header = ({ toggleSidebar }) => {
  return (
    <div className="py-4 bg-PrimaryWhite border-PrimaryGray  border-y-2 border-e-2">
      <div className="flex">
        <button
          onClick={toggleSidebar}
          className=" mr-4 text-xl"
          aria-label="Toggle sidebar "
        >
          ☰
        </button >
        <h1 className="text-lg font-semibold">Header</h1>
      </div>
    </div>
  )
}

export default Header