 
 import { Input } from 'antd';
 import { Button } from 'antd';
import Password from 'antd/es/input/Password';
 const UserForm = () =>{
return(
    <div className="user-form" style={{width : "50%" , margin : "auto"}}>
            <div style={{
                display : "flex",
                flexDirection : "column",
                gap : "15px"
            }}>
                <div>
                    <span>FullName</span>
                    <Input></Input>
                </div>
                <div>
                    <span>Email</span>
                    <Input></Input>
                </div>
                <div>
                    <span>Password</span>
                    <Password></Password>
                </div>
                <div>
                    <span>PhoneNumber</span>
                    <Input></Input>
                </div>
                
                <div>
                    <Button type="primary" >Create User</Button>
                 </div>
            </div>
            
    </div>
)
 }
 export default UserForm