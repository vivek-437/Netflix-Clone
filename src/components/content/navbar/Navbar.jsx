import React,{useState,useEffect} from 'react';
import "../css/navbar.css";

const Navbar = () => {
    const [Val,setVal]=useState();
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>50){
                setVal(true);
            }else{
                setVal(false);
            }
        });
        return()=>{
            window.addEventListener('scroll')
        };
    },[]);
  return <>
  {/* if val is true then change backgb else nothing */}
  <div className={`navbar ${Val?'navbar_change':''}`}>
    <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix-logo" srcset="" />
    <div className='mine_logo'>
        V-tech
    </div>
  </div>    
  
  </>;
};

export default Navbar;
