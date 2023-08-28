const axios = require("axios")

const API_URL = "http://127.0.0.1:5000/user"

const register = async (user) => {
  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams(user)
  }
  const res = await fetch(API_URL + "register", opts)
  const body = await res.json()
  if (body.error) {
    throw new Error(body.error)
  }
  if (body) {
    localStorage.setItem("user", body)
  }
  return body
}

const registerAxios = async (user) => {
  const res = await axios.post(API_URL + "/register", user)
  const data = res.data
  if (data) {
    localStorage.setItem("user", data)
  }
  return data
}

const login = async (user) => {
  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams(user)
  }
  const res = await fetch(API_URL + "/login", opts)
  const body = await res.json()
  if (body.error) {
    throw new Error(body.error)
  }
  if (body) {
    localStorage.setItem("user", JSON.stringify(body))
  }
  return body
}

const loginAxios = async (user) => {
  const res = await axios.post(API_URL + "/login", user)
  const data = res.data
  if (data) {
    localStorage.setItem("user", data)
  }
  return data
}

const user = {
  username: "user1",
  password: "user1"
}

// login(user)
// loginAxios(user)

export default {
  registerAxios,
  loginAxios
}