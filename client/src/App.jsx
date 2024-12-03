import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";



const App = () => {
  const [admins, setAdmins] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/getAdmins")
    .then(admins => setAdmins(admins.data))
    .catch(err => console.log(err))
  })

  return (
    <>
      <div className="header-container">
        <h1>Task Master</h1>
        <h1>Logout</h1>
      </div>
      <div className="adminui-container">
        <table>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
              <th>
                Password
              </th>
            </tr>
          </thead>
          <tbody>
            {
              admins.map(admin => {
                return (
                  <tr key={admin._id}>
                    <td>{admin.name}</td>
                    <td>{admin.email}</td>
                    <td>{admin.password}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
