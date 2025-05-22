const Header = ({ toggleSidebar }) => {
  return (
    <div className="py-2 bg-PrimaryWhite border-PrimaryWhiteGray  border-y-1 border-e-1 sticky top-0 w-full">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="mx-4 size-10 p-1 text-xl bg-PrimaryWhite rounded-md border-PrimaryWhiteGray border-1 cursor-pointer"
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