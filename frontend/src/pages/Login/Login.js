import React from 'react'
import FormContainer from '../../components/form/FormContainer'
import InputBox from '../../components/form/InputBox'
import AuthText from '../../components/form/AuthText'
import Submit from '../../components/form/Submit'
import Banner from '../../components/form/Banner'

const Login = () => {
  
  return (
    <div className="flex justify-start">
      <Banner/>
      <FormContainer>
        <AuthText />
        <InputBox placeholder={'Email Id or Phone Number'}/>
        <InputBox type='password' placeholder='Password' />
        <Submit />
      </FormContainer>
    </div>
  )
}

export default Login