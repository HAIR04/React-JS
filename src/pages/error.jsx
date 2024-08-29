import { Link, useRouteError } from "react-router-dom";
export default function ErrorPage() {
const error = useRouteError();
console.error(error);
return (
<div id="error-page" style={{
    textAlign : "center" ,
    paddingTop : "50px" ,
    display : "flex",
    flexDirection : "column",
    justifyContent : "space-evenly",
    height : "50vh"
    
}}>
<h1>LỖI RỒI ÔNG ƠI :(</h1>
<p>ÔNG ƠI SAI ĐƯỜNG DẪN RỒI !!!</p>
<p>
<i>{error.statusText || error.message}</i>
</p>
<div>
   <Link to="/"> <button>Back Home</button></Link>
</div>
</div>
);
}

