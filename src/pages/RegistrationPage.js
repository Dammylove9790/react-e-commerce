 
 import React, {useState} from 'react'
 function RegistrationPage() {
    const Form = {
        width: '40%',
        margin: '20px auto'
    }

    const Input = {
        width: '100%', 
        height:'40px', 
        border:'none', 
        borderBottom: '1px inset green'
    }

    const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [phone, setPhone] =useState('');
     const [password, setPassword] = useState('');
     const [address, setAddress] = useState('');
     const [confirm, setConfirm] = useState('');

    return(
        <div style={Form}>
            <h2 style={{textAlign: 'center', padding: '5px'}}>Registration Form</h2>
            <fieldset>
                <form>
                    <div style={{margin: '2%'}} >
                        {name}
                        <input style={Input} type= 'text' onChange={(e)=>{setName (e.target.value)}}
                        name = 'name' placeholder='Enter your name' />
                    </div>

                    <div style={{margin: '2%'}}>
                        {phone}
                        <input style={Input}  type= 'text' onChange={(e)=>{setPhone (e.target.value)}}
                        name = 'name' placeholder='Enter your phone' />
                    </div>

                    <div style={{margin: '2%'}}>
                        {email}
                        <input style={Input}  type= 'email' onChange={(e)=>{setEmail (e.target.value)}}
                        name = 'name' placeholder='Enter your email' />
                    </div>

                    <div style={{margin: '2%'}}>
                        {address}
                        <input style={Input}  type= 'text' onChange={(e)=>{setAddress (e.target.value)}}
                        name = 'name' placeholder='Enter your address' />
                    </div>

                    <div style={{margin: '2%', border:'none', paddingBottom: '10px', borderBottom: '1px inset green'}}>
                        <h4>Gender</h4>
                        <div style={{marginTop: '1%'}}>
                            <input id="ma" 
                            name= "male"
                            value="male" type="radio"/>
                            <span>Male</span>
                        </div>
                        <div>
                            <input id="ma" 
                             name= "male"
                            value="male" type="radio"/>
                            <span>Female</span>
                        </div>
                    </div>

                    <div style={{margin: '2%'}}>
                        {password}
                        <input style={Input} type= 'password' onChange={(e)=>{setPassword (e.target.value)}}
                        name = 'name' placeholder='Enter your password' />
                    </div>

                    <div style={{margin: '2%'}} >
                        {confirm}
                        <input style={Input} type= 'password' onChange={(e)=>{setConfirm (e.target.value)}}
                        name = 'name' placeholder='Confirm your password' />
                    </div>

                    

                    <div  style={{margin: '2%', border:'none', paddingBottom: '10px', borderBottom: '1px inset green'}}>
                        <h4>Marital Status</h4>
                        <div style={{marginTop: '1%'}}>
                            <input id="ma"
                             value="male" 
                             name= "status"
                             type="radio"/>
                            <span>Engaged</span>
                        </div>
                        <div>
                            <input id="female" 
                            value="female"
                            name= "status" 
                            type="radio"/>
                            <span>Single</span>
                        </div>
                    </div>

                    <div style={{textAlign: "center", marginBottom: "10px"}}>
            <button type="submit" style={{padding: "11px"}}>Submit</button>
        </div>
                </form>
            </fieldset>
        </div>
    )
  }
  
  export default RegistrationPage