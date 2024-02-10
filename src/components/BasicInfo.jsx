import { useState } from "react";
import "/Users/ryan/OdinProject/cv-application-react/src/styles/styles.css"

function BasicInfo({ onChange, value }) {
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
        <form onChange={handleSubmit} action="">
          <label htmlFor="name">Please enter your name   </label>
          <input type="text" name="name" value={value} onChange={onChange}/><br></br>
          <label htmlFor="email">Please enter your email   </label>
          <input type="email" name="email" onChange={e => setEmail(e.target.value)} /><br></br>
          <label htmlFor="phoneNumber">Please enter your phone number   </label>
          <input type="tel" name="phoneNumber" onChange={e => setPhoneNumber(e.target.value)}/><br></br>
        </form>
      </div>
    </div>
  )
}

function InfoTyped ({onChange, value}) {


  return (
    <>
      <h3>{value}</h3>
    </>
  ) 
    

}

export function Resume () {
  const [name, setName] = useState('')

  function handleChange(e) {
    setName(e.target.value)
    console.log(name)
    
  }

  return (
    <>
      <BasicInfo
      value={name}
      onChange={handleChange}
      />
      <InfoTyped 
      value={name}
      onChange={handleChange}
      ></InfoTyped>
    </>
  )

}

