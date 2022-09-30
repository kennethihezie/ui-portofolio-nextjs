import Container from "../components/container/container"
import Search from "../components/search/search"

const { default: Card } = require("../components/card/card")
const { default: NavBar } = require("../components/navbar/navbar")

const Home = () => {
  return (
    <Card>
      <NavBar />
      <Search />
      <Container />
    </Card>
  )
}

export default Home