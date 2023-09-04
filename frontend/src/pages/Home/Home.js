import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate()
  useEffect(() => {
    if(cookies.jwt == undefined || cookies.jwt == null || cookies.jwt.length == 0) {
      navigate("/login")
    }
  })
  return (
    <div>Home</div>
  )
}

export default Home