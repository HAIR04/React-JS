import { Table } from 'antd';
import { fetchAllUserAPI } from '../../services/api.services';
import { useEffect, useState } from 'react';

const UserTable = () => {

  const [dataUser , setDataUser] = useState([])
    
  useEffect(() => {
    loadUser()
  }, [])
  
    const columns = [
        {
          title: 'Id',
          dataIndex: '_id',
        },
        {
          title: 'Name',
          dataIndex: 'fullName',         
        },
        {
          title: 'Email',
          dataIndex: 'email',
         
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
         
        },

      ];

      const loadUser =  async() => {
                 //Chờ phần này chạy xong thì trả ra biến res
       const res = await fetchAllUserAPI()
       setDataUser(res.data)
      }

   

      return(
        
        <Table columns={columns} 
        dataSource={dataUser} 
        rowKey={"_id"}/>
      )
}
export default UserTable