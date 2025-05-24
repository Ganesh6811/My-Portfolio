// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//     const navigate = useNavigate();

//     const clickedAbout = ()=>{
//       navigate("/about");
//     }

//     const clickedHome = ()=>{
//       navigate("/");
//     }

//     return (<div>
//         <style>
//             {`
//           @media (max-width: 768px) {
//             .name-text {
//               font-size: 28px; 
//             }
//           }

//           @media (min-width: 768px) {
//             .name-text {
//               font-size: 32px;
//             }
//           }
//         `}
//         </style>

//         <div className='d-flex justify-content-between text-white align-items-center mx-5' style={{ height: "13vh"}}>
//             <div>
//                 <p className='name-text mb-0 fw-semibold' style={{ fontFamily: "'Bebas Neue', sans-serif" }}>GANESH SUDHANAGUNTA</p>
//             </div>
//             <div className='d-flex gap-5'>
//                 <a href='#Home' className='mb-0 fw-semibold' onClick={()=>clickedHome()} style={{textDecoration: 'none', color: 'inherit'}}>Home</a>
//                 <a href='#About' className='mb-0 fw-semibold' onClick={()=>clickedAbout()} style={{textDecoration: 'none', color: 'inherit'}}>About</a>
//                 <a href='#contact' className='mb-0 fw-semibold' style={{textDecoration: 'none', color: 'inherit'}}>Contact</a>
//             </div>
//         </div>

//     </div>);
// }

// export default Header;

import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const clickedAbout = () => {
        navigate("/about");
        setMenuOpen(false);
    };

    const clickedHome = () => {
        navigate("/");
        setMenuOpen(false);
    };

    const clickedContact = ()=>{
      setMenuOpen(false);
    }

    return (
        <div>
            <style>
                {`
                @media (max-width: 768px) {
                    .name-text {
                        font-size: 28px;
                    }
                    .menu-links {
                        display: ${menuOpen ? 'flex' : 'none'};
                        flex-direction: column;
                        gap: 10px;
                        background-color: #000; /* Adjust as needed */
                        padding: 10px;
                        position: absolute;
                        top: 60px;
                        right: 20px;
                        z-index: 10;
                    }
                }

                @media (min-width: 768px) {
                    .name-text {
                        font-size: 32px;
                    }
                    .menu-toggle {
                        display: none;
                    }
                    .menu-links {
                        display: flex !important;
                        gap: 30px;
                        position: static;
                        background-color: transparent;
                        flex-direction: row;
                        padding: 0;
                    }
                }

                .menu-toggle {
                    font-size: 24px;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }
            `}
            </style>

            <div className='d-flex justify-content-between text-white align-items-center mx-5 position-relative' style={{ height: "13vh" }}>
                <div>
                    <p className='name-text mb-0 fw-semibold' style={{ fontFamily: "'Bebas Neue', sans-serif" }}>GANESH SUDHANAGUNTA</p>
                </div>
                
                {/* Hamburger Button (Visible only on mobile) */}
                <button className="menu-toggle d-md-none" onClick={() => setMenuOpen(prev => !prev)}>
                    &#9776; {/* Unicode for the "hamburger" icon */}
                </button>

                {/* Navigation Links */}
                <div className='menu-links text-white'>
                    <a href='#Home' className='mb-0 fw-semibold' onClick={clickedHome} style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
                    <a href='#About' className='mb-0 fw-semibold' onClick={clickedAbout} style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
                    <a href='#contact' className='mb-0 fw-semibold' onClick={clickedContact} style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
