import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import HeaderPage from "./Components/HeaderPage"
import FooterPage from "./Components/FooterPage"
// import AllTheBooks from "./Components/AllTheBooks"
import history from "./Data/history.json"
import BookList from "./Components/BookList"
import AlertPage from "./Components/AlertPage"
function App() {
  return (
    <>
      <HeaderPage />
      <AlertPage />
      <BookList books={history} />
      {/* <AllTheBooks /> */}
      <FooterPage />
    </>
  )
}
export default App
