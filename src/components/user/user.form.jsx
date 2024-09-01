 
 import { Input, notification } from 'antd';
 import { Button } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { createUserAPI } from '../../services/api.services';
 const UserForm = () =>{

    const [FullName , SetFullName] = useState("")
    const [Email , SetEmail] = useState("")
    const [Password , SetPassword] = useState("")
    const [PhoneNumber , SetPhoneNumber] = useState("")
                        //Hứng data
    const handleClickBtn =  async() =>{
      const res = await  createUserAPI(FullName,Email,Password,PhoneNumber)
      if(res.data){
        notification.success({
            message : "Create",
            description : "Tạo mới User thành công"
          })
      }else{
        notification.error({
            message : "Create",
            description : "Có lỗi xảy ra"
          })
      }
     
    }
return(
    <div className="user-form" style={{width : "50%" , margin : "auto"}}>
            <div style={{
                display : "flex",
                flexDirection : "column",
                gap : "15px"
            }}>
                <div>
                    <span>FullName</span>           
                    <Input
                    value={FullName}
                    onChange={(event) => SetFullName(event.target.value)}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                    value={Email}
                    onChange={(event) => SetEmail(event.target.value)}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                    value={Password}
                    onChange={(event) => SetPassword(event.target.value)}
                    />
                </div>
                <div>
                    <span>PhoneNumber</span>
                    <Input
                    value={PhoneNumber}
                    onChange={(event) => SetPhoneNumber(event.target.value)}
                    />
                </div>
                
                <div>
                    <Button type="primary" 
                    onClick={handleClickBtn}
                    >Create User</Button>
                 </div>
            </div>
            
    </div>
)
 }
 export default UserForm