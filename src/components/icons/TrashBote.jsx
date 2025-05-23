const TrashBote = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="m12 13.586 2.293-2.293 1.414 1.414L13.414 15l2.293 2.293-1.414 1.414L12 16.414l-2.293 2.293-1.414-1.414L10.586 15l-2.293-2.293 1.414-1.414L12 13.586ZM7 4V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.08L19 21a2 2 0 0 1-2 2H7c-1.105 0-2-.895-1.997-1.917L4.08 10H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3Zm0 2H4v2h16V6H7Zm-.914 4L7 21h10l.003-.083.91-10.917H6.086ZM15 4V3H9v1h6Z" />
    </svg>
  )
}

export default TrashBote