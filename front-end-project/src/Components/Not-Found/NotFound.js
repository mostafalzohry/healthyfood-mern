import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>


{/* <img src={require("./404.jpg")}  className="img-fluid" /> */}
        <div className='container mb-4 '> 
          <div className='row'> 
              <div className='col-12'>
              <img src={require("./404.jpg")} className='img-fluid ' />
              <h5 className='text-center'>
                  you would go <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link className='p-2 ' to={'/'}> Home </Link>

                  or go to <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link className='p-2 ' to={'/allMeals'}> Products </Link>
                  to continue surfing
              </h5>
              </div>
          </div>
        </div>

    </>
  )
}
