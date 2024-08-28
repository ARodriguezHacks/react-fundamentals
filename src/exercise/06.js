// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

 let inputRef = React.useRef(null)

 function handleSubmit(e) {
    e.preventDefault();
    let usernameValue = inputRef.current.value
    onSubmitUsername(usernameValue)
  }

  function handleChange(e) {
    const isValid = e.target.value === e.target.value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" onChange={handleChange} ref={inputRef}
        name="username" />
        { error ? <p style={{color: 'red'}}><small>{error}</small></p> : null}
      </div>
      <button type="submit" disabled={error}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
