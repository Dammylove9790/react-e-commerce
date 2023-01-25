import React, {useState} from "react";
function LoginPage() {
    const mainForm = {
        width: '40%',
        margin:'10px auto',
     }
     const formDiv ={
         margin: '2%'
     }
 
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [phone, setPhone] =useState('');
     const [password, setPassword] = useState('');
 
return(
    <form style={mainForm}>
        <h2 style={{textAlign: 'center', padding: '5px'}}>Login</h2>
        <fieldset> 
        <div style={formDiv}> 
        {name}
            <input type="text" onChange={(e)=>{setName (e.target.value)}}
             name='name' placeholder='Your Name' 
              style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}}/>
        </div>

        <div style={formDiv}>
          {password }
            <input type="password" onChange={(e)=> {setPassword (e.target.value)}}
             name='password' placeholder='Your Password' style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
        </div>
        <div style={{textAlign: "center", marginBottom: "10px"}}>
            <button type="submit" style={{padding: "11px"}}>Login</button>
        </div>

        
        </fieldset>
        <span><a href="" style={{textDecoration: 'none', padding: "10px"}}>forget password</a></span>
    </form>
)
  }
  
  export default LoginPage