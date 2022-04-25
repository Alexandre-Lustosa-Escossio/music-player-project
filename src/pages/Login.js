import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { saveOnLocalStorage } from '../utils/localStorageHandler'
import '../style/Login.css'

export default function Login() {

  const [nameInput, setNameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const history = useHistory()

  const validateFields = () => {
    if( nameInput.length > 3 && passwordInput.length > 5 ){
      setIsButtonDisabled(false)
    }
  }

  const handleInputChange = ({target: {name, value}}) => {
    name=== 'name-input' ? setNameInput(value) : setPasswordInput(value)
    validateFields()
  }

  const onSigninBtnClick = () => {
    saveOnLocalStorage('userLoginData' ,{name: nameInput, password: passwordInput})
    history.push('/search')
  }

  return (
    <main>
      <div id='main'>
        <h1 id='heading'>Login</h1>
        <hr/>
        <div id='form-container'>
          <div className="mb-3">
            <label htmlFor='name-input' className="form-label">Name</label>
            <input id='name-input'
            name='name-input'
            value={nameInput}
            type="text"
            className="form-control"
            placeholder="Michael Scott"
            onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor='password-input' >Password</label>
            <input type="password"
            name='password-input'
            value={passwordInput} 
            className="form-control"
            id='password-input'
            placeholder="Password"
            onChange={handleInputChange} />
          </div>
          <div id='btn-container' className="col-12">
            <button id='button' 
            className="btn btn-primary"
            type="submit"
            disabled={isButtonDisabled}
            onClick={() => onSigninBtnClick()}>Sign In</button>
          </div>
        </div>
      </div>
  </main>
    )
}
