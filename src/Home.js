import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <p>Home</p>
      <Link to={"/profile"}>Profile</Link>
    </>
  )
}

export default Home
