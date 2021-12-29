import { Link } from "react-router-dom"

function Profile() {
  return (
    <>
      <p>Profile</p>
      <Link to={"/home"}>Home</Link>
    </>
  )
}

export default Profile
