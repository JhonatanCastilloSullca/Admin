const DownChevronIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={props.size || 24}
      height={props.size || 24}
      fill="currentColor"
    >
      <path
        fill="currentColor"
        fillRule="evenodd" d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd" />
    </svg>
  )
}

export default DownChevronIcon