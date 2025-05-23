const UpChevronIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={props.size || 24}
      height={props.size || 24}
      fill="currentColor"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 7a1 1 0 0 1 .707.293l7 7a1 1 0 0 1-1.414 1.414L12 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414l7-7A1 1 0 0 1 12 7Z"
        clipRule="evenodd" />
    </svg>
  )
}

export default UpChevronIcon