import './style.css'



const MyComponent = () => {
    
    //In ra giá trị biến vào html : để biến trong {}
    //Chỉ in ra được 2 kiểu String và Number
    //Muốn dùng chuỗi hoặc mảng thì dùng ép kiểu String
    const name = "Hoàng Hải";
    const number = 2;
    return( 
      
        //Không muốn vỡ layout khi css thì hãy bọc trong <> (Fragment)
        <>
           <div>{console.log("Và chưa có vợ")}</div>
          <h1 className="text_firs" 
           style={
            {borderRadius : "20px"}
          }>  Đặng {name}</h1> 
        
         {/* Thay class -> className */}
          <div className="child">Học : CNTT năm {number}</div>
        </>
    );
   }



   //Xuất ĐƠN biến
   //default : chỉ xuất 1 biến chỉ định duy nhất 
   export default MyComponent
  