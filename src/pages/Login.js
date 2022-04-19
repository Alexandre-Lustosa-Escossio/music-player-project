import React from 'react'

export default function Login() {
  return (
    <div>
    <div class="mb-3">
      <label for='name-input' class="form-label">Name</label>
      <input id='name-input' type="email" class="form-control" placeholder="name@example.com" />
    </div>
    <div class="mb-3">
      <label for='password-input' class="visually-hidden">Password</label>
      <input type="password" class="form-control" id='password-input' placeholder="Password" />
    </div>
  </div>
    )
}
