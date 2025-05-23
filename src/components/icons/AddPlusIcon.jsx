const AddPlusIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      baseProfile="tiny"
      fill="currentColor"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24">
      <path
        d="M18 10h-4V6a2 2 0 0 0-4 0l.071 4H6a2 2 0 0 0 0 4l4.071-.071L10 18a2 2 0 0 0 4 0v-4.071L18 14a2 2 0 0 0 0-4z" />
    </svg>
  )
}

export default AddPlusIcon