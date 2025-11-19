import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import HeaderPage from "./Components/HeaderPage"
import FooterPage from "./Components/FooterPage"
// import AllTheBooks from "./Components/AllTheBooks"
import history from "./Data/history.json"
import BookList from "./Components/BookList"
function App() {
  return (
    <>
      <HeaderPage />
      <BookList books={history} />
      {/* <AllTheBooks /> */}
      <FooterPage />
    </>
  )
}
export default App
