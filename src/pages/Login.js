import React, {useState} from 'react'


export default function Login() {

  const [nameInput, setNameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const validateFields = () => {
    if( nameInput.length > 3 && passwordInput.length > 5 ){
      setIsButtonDisabled(false)
    }
  }

  const handleInputChange = ({target: {name, value}}) => {
    name=== 'name-input' ? setNameInput(value) : setPasswordInput(value)
    validateFields()
  }

  return (
    <div>
    <div class="mb-3">
      <label htmlFor='name-input' class="form-label">Name</label>
      <input id='name-input'
      name='name-input'
      value={nameInput}
      type="text"
      class="form-control"
      placeholder="Michael Scott"
      onChange={handleInputChange} />
    </div>
    <div class="mb-3">
      <label htmlFor='password-input' >Password</label>
      <input type="password"
      name='password-input'
      value={passwordInput} 
      class="form-control"
      id='password-input'
      placeholder="Password"
      onChange={handleInputChange} />
    </div>
    <div class="col-12">
      <button class="btn btn-primary"
      type="submit"
      disabled={isButtonDisabled}>Sign In</button>
    </div>
  </div>
    )
}
