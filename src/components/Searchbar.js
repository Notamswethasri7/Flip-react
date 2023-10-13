import React from'react';
import logo from '../images/flipkart.png'
import '../css/bootstrap.css'
function Searchbar(){
    return(
        <>
        <div className='row com mt-4'>
            <div className='col-md-2 '>
                 <img src={logo} height={40}/>
            </div>
            <div className='col-md-5 '>
            <input type="text" placeholder='search' className="form-control dis" style={{ borderRadius: "30px 30px 30px 30px"}}  ></input>

            </div>
            <div className='col-md-2 '>
            <p className='mb-2 ' > <i class="fa-solid fa-house size"></i>Become a Seller</p>
            </div>
            <div className='col-md-1 '>
            <p className='mb-2 '> <i class="fa-thin fa-user"></i>Swetha</p>
            </div>
            <div className='col-md-1 '>
            <p className='mb-2  ' > <i class="fa fa-shopping-cart"></i>Cart</p>
            </div>
            <div className='col-md-1 '>
            <p className='mb-2  ' > <i class="fa-regular fa-ellipsis-vertical"></i> </p>
            </div>
        </div>
        </>
       
        );
    }
    
    
    export default Searchbar;