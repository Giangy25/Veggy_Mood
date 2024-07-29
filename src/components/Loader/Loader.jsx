import { RotatingLines } from "react-loader-spinner"

function Loader() {
  return (
    <RotatingLines
      strokeColor="red"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  )
}

export default Loader