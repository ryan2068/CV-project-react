import { useState } from "react";

export default function BasicInfo() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
  }
  return (
    <>
      <div>
        <form action="">
          <label htmlFor="name">Please enter your name</label>
          <input type="text" name="name" onChange={e => setName(e.target.value)} />
          <button type="submit" onClick={handleSubmit}></button>
        </form>
      </div>
    </>
  )
}
