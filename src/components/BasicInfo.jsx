import { useState } from "react";
import "/Users/ryan/OdinProject/cv-application-react/src/styles/styles.css"

function BasicInfo({ onChange, value }) {
  



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(generalData.name)
    console.log(generalData.email)
    console.log(generalData.phoneNumber)
  }
  return (
    <div className="content">
      <div className="form-div">
        <form onChange={handleSubmit} action="">
          <label htmlFor="name">Please enter your name   </label>
          <input type="text" name="name" value={value} onChange={onChange}/><br></br>
          <label htmlFor="email">Please enter your email   </label>
          <input type="email" name="email" value={value} onChange={onChange} /><br></br>
          <label htmlFor="phoneNumber">Please enter your phone number   </label>
          <input type="tel" name="phoneNumber" value={value} onChange={onChange}/><br></br>
        </form>
      </div>
    </div>
  )
}

function InfoTyped ({onChange, generalData, email}) {


  return (
    <>
      <h3>{generalData}</h3>
      <h3>{generalData}</h3>
    </>
  ) 
    

}

export function Resume () {
  const [generalData, setGeneralData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  })

  function handleNameChange(e) {
    setGeneralData({
      ...generalData,
      name: e.target.value
    });
  }

  function handleEmailChange(e) {
    setGeneralData({
      ...generalData,
      email: e.target.value
    });
  }

  function handlePhoneNumberChange(e) {
    setGeneralData({
      ...generalData,
      phoneNumber: e.target.value
    });
  }


  return (
    <>
      <BasicInfo
      value={generalData}
      onChange={handleNameChange}
      />
      <InfoTyped 
      value={generalData}
      onChange={handleEmailChange}
      ></InfoTyped>
    </>
  )

}

