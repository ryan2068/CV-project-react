import { useState } from "react";
import "/Users/ryan/OdinProject/cv-application-react/src/styles/styles.css"

export default function BasicInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState(0)


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
    console.log(email)
    console.log(phoneNumber)
  }
  return (
    <div className="content">
      <div className="form-div">
        <form action="">
          <label htmlFor="name">Please enter your name   </label>
          <input type="text" name="name" onChange={e => setName(e.target.value)} /> <br></br>
          <label htmlFor="email">Please enter your email   </label>
          <input type="email" name="email" onChange={e => setEmail(e.target.value)} /><br></br>
          <label htmlFor="phoneNumber">Please enter your phone number   </label>
          <input type="tel" name="phoneNumber" onChange={e => setPhoneNumber(e.target.value)}/><br></br>
          <button type="submit" onClick={handleSubmit}></button>
        </form>
      </div>
    </div>
  )
}
