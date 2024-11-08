import { useState } from "react";

const Save = () => {
 const[member,setMember] = useState({
    name:"",
    password:"",
    email:"",
    phone:""
 });

 const joinUpdate = (e) => {
    const { name, value} = e.target;
    setMember({
        ...member,
        [name]: value,
    });
    console.log(member);
 };

  return (
    <>
      <h2>Save.jsx</h2>
     이름:<input type="text" name="name" onChange={joinUpdate}/>
      <br />
     비밀번호:<input type="text" password="password" onChange={joinUpdate} />
      <br />
     이메일:<input type="text" email="email" onChange={joinUpdate} />
      <br />
     전화번호:<input type="text" phone="phone" onChange={joinUpdate} />
    </>
  );
};
export default Save;