const SearchIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      fill="CurrentColor"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24">
      <path
        fill="CurrentColor"
        fillRule="evenodd"
        d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 12.606 4.192l5.101 5.1a1 1 0 0 1-1.414 1.415l-5.1-5.1A7 7 0 0 1 3 10Z"
        clipRule="evenodd" />
    </svg>
  )
}

export default SearchIcon