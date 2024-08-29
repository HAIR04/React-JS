
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
import { Outlet } from "react-router-dom"
//component = html + css + js
//Cú pháp arrow function () =>{}
// Luôn viết hoa chữ cái đầu của Function


const App = () => {
  
  return (
    <>
    <Header/>

    {/* Thằng con kế thừa sẽ xuất hiện ra ở đây , dựa vào vị trí đặt Outlet*/}
   <Outlet/>
   
   
    <Footer/>
    </>
  )
}

export default App
