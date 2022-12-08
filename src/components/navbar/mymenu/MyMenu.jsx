import React from 'react';
import { Link } from 'react-router-dom';
const MyMenu = () => {
        return ( 
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                       
                            <button className='btn btn-secondary myBtnMenu'><Link className='nav-item' to={"/category/Acción"}><img src="img/accion.png" alt="accion" width={30}/></Link></button>
                        
                    </li>
                    <li className="nav-item">
                        
                    <button className='btn btn-secondary myBtnMenu'><Link className='nav-item' to={"/category/Aventura"}><img src="img/aventur.png" alt="aventura" width={30}/></Link></button>
                        
                    </li>
                    <li className="nav-item">
                        
                    <button className='btn btn-secondary myBtnMenu'><Link className='nav-item' to={"/category/Estrategia"}><img src="img/estrateg.png" alt="estrategia" width={30}/></Link></button>
                        
                    </li>
                    <li className="nav-item">
                   
                    <button className='btn btn-secondary myBtnMenu'><Link className='nav-item' to={"/category/Deportes"}><img src="img/depo.png" alt="deportes" width={30}/></Link></button>
                        
                    </li>
                    <li className="nav-item">
                       
                    <button className='btn btn-secondary myBtnMenu'><Link className='nav-item' to={"/category/Terror"}><img src="img/terror.png" alt="terror" width={30}/></Link></button>
                        
                    </li>
                </ul>
        );
    }
    
    export default MyMenu;
