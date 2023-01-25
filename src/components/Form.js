import React, { useState } from 'react'
function Form() {
    const mainForm = {
    //    width: '40%',
       margin:'auto',
    }
    const formDiv ={
        marginTop: '2%'
    }

    const [user, setuser] = useState({
      name: '',
      email : '',
      phone: '',
      password : '',
      
    });
    const [errors, setErrors] = useState({
      nameErr: '',
      emailErr: '',
      phoneErr: '',
      password: '',
      confirmPasswordErr: '',

    })
    const handleForm = (e)=>{
       let name= e.target.name;
       let value = e.target.value;
       setuser({
        ...user,
        [name]: value,
       })
    }
    
    const submitData = (e)=>{
      e.preventDefault()

      if(user.name == "" || user.name == 0 ||user.name == null || user.name.trim() == ""){
        setErrors((err)=>{
        return  {
            ...err,
            nameErr: `Name is required`,
          }
        })
      }
      if(user.email == "" || user.email == 0 ||user.email == null || user.email.trim() == "" || user.email.indexOf('@', 3 ) == -1 || user.email.indexOf('.' ) == -1){
        setErrors((err)=>{
        return  {
            ...err,
            emailErr: `Email is required`,
          }
        })
      }
      if( user.phone.startsWith('070') == false && user.phone.startsWith('081') == false && user.phone.startsWith('090') == false && user.phone.length != 11){
        setErrors((err)=>{
        return  {
            ...err,
            phoneErr: `Phone is required`,
          }
        })
        
        
      }
        if(user.password == "" || user.password == 0 ||user.password == null || user.password.trim() == ""){
        setErrors((err)=>{
        return  {
            ...err,
            password: `Password is required`,
          }
        })
      }
      if(user.confirmPassword != user.password){
        setErrors((err)=>{
        return  {
            ...err,
            password: `Password is not a match`,
          }
        })
      }
    
      else{
        console.log(user)
      }
      
    }
  return (
    <div>
       <fieldset style={{width: '40%', margin: '100px auto', padding: '1%'}}>
       <form onSubmit={submitData} style={mainForm }>
        <div style={formDiv}> 
        {user.name}
            <input type="text" onChange={handleForm}
             name='name' placeholder='Your Name' 
              style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}}/>
            <strong>{errors.nameErr}</strong>
          </div>
            <div style={formDiv}>
            {user.email}
            <input type="email" name='email'
            onChange={handleForm}
             placeholder='Your Email' 
              style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
              <strong>{errors.emailErr}</strong>
        </div>
        <div style={formDiv}>
        {user.phone}
            <input type="tel"
             name='phone' onChange={handleForm}
              placeholder='Your phone'
               style={{width: '100%',
                height:'40px', border:'none',
                 borderBottom: '1px inset green'}} />
                 <strong>{errors.phoneErr}</strong>
        </div>
        <div style={formDiv}>
        {user.password}
            <input type="password"
             name='password'
             onChange={handleForm}
              placeholder='Your Password'
               style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
               <strong>{errors.password}</strong>
        </div>

        <div style={formDiv}>
        {user.confirmPassword}
            <input type="confirmPassword"
             name='confirmPassword'
             onChange={handleForm}
              placeholder='Confirm Password'
               style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
               <strong>{errors.confirmPasswordErr}</strong>
        </div>
        <button type='submit' style={{padding: '12px',marginTop: '10px'}}>Register</button>
       </form>
       </fieldset>

    </div>
  )
}

export default Form