import React, {useState} from'react';
import firebase from './firebase'
//authentication use
const auth=firebase.auth();
function Login(){
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    const LoginFn = async()=>{
        //email, password -> firebase 
        // **********firebase console
        //auth start
        //enable->firebase console
        //user create on firbase side

        //npm i firebase -> local machine
        //firebase login
        let res = await auth.signInWithEmailAndPassword(email,password);
        //unique id
        console.log(res.user.uid); 
    }

    return(
        <div>
            <div>
                Email
                <input type="email" value={email} placeholder="Enter your Email" onChange={function(e){ setEmail(e.target.value)}} />
            </div>
            <div>
                Password
                <input type="email" value={password} placeholder="**********" onChange={function(e){ setPassword(e.target.value)}} />
            </div>
            <div>
                <button onClick={LoginFn}>Login</button>
            </div>
        </div>
    )
}
export default Login;