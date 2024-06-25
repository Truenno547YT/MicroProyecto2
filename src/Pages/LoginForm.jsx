
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from "react";
import './LoginForm.css';
import  {FaUser} from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { auth, db } from './firebase';
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import Header from "../component/Header-s.jsx";


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    //se encarga del login
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Usuario Loggeado correctamente!')
            toast.success("Usuario loggeado correctamente!",{
                position: "top-center",
              });
            //pagina a la que manda despues del login
            window.location.href='/LandingPage';
            
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
            position: "bottom-center",
          });
        }
    };

    //Login con google
    function googleLogin() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then(async (result) => {
        console.log(result);
        const user = result.user;
        if (result.user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            nombre: user.displayName,
            photo: user.photoURL,
            apellido: "",
            rol: "",
            telefono: "",
          });
          toast.success("Usuario loggeado correctamente!", {
            position: "top-center",
          });
          window.location.href = "/LandingPage";
        }
      });
    }
    function facebookLogin() {
        const providerf = new FacebookAuthProvider();
        signInWithPopup(auth, providerf).then(async (result) => {
        console.log(result);
        const user = result.user;
        if (result.user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            nombre: user.displayName,
            photo: user.photoURL,
            apellido: "",
            rol: "",
            telefono: "",
          });
          toast.success("Usuario loggeado correctamente!", {
            position: "top-center",
          });
          window.location.href = "/LandingPage";
        }
      });
    }

    return (
        
        <>
        <Header/>
        <div className="wrapper">
            
            <form onSubmit={handleSubmit}>
                <div className="wrapper-out">
                    <h1><a href="#"><IoIosArrowBack className="icon1" /></a><FaUser className='icon2'/> Iniciar Sesión</h1>
                </div>
                
                
                <div className="input-box">

                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
    
                <button type="submit">Acceder</button>

                <div className="register_link">
                    <p>¿No tienes cuenta?  <a href="/register">Registrate</a></p>
                </div>

                <div>
                    <p className="continue-p">-- O continua con--</p>
                        <div className="social">
                        <img className="socialImg" src={'./src/assets/images/google.jpg'} onClick={googleLogin}/>
                        <img className="socialImg"src={'./src/assets/images/facebook.svg'} onClick={facebookLogin}/>
                        </div>
                </div>

                
            </form>
            
        </div>
        </>
    );
    } 
export default LoginForm; 