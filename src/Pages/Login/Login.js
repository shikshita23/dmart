import '../../Css/Login.css';
import {Link} from 'react-router-dom';
export default function Login(){
    return(
        <>
        <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
        </div>
        <div className='Container'>
        <div className="inputs">
            
            <div className="input">
                <input type="email" placeholder='Email id'/>
            </div>
            <div className="input">
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <div className="signUpDiv">Dont have an account? <Link to="/SignUp" className='signUpLink'>SignUp</Link></div>
        <input className="submitButton" type='submit'></input>
        
    </div>
        </>
    )
}