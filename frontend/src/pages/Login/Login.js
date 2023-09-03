import React from 'react'
import FormContainer from '../../components/form/FormContainer'
import InputBox from '../../components/form/InputBox'
import AuthText from '../../components/form/AuthText'
import Submit from '../../components/form/Submit'

const Login = () => {
  
  return (
    <>
      <FormContainer>
        <AuthText />
        <InputBox placeholder={'Email Id or Phone Number'}/>
        <InputBox type='password' placeholder='Password' />
        <Submit />
      </FormContainer>
    </>
  )
}

export default Login