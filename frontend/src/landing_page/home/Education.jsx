import React from 'react';
function Education() {
    return ( <div className=" container my-5 py-4 mx-5 p-5 mb-5">
        <div className="row">
            <div className="col">
                  <img src='media/images/education.svg' alt='Educationimg' style={{width:"85%"}}></img>
            </div>
            <div className="col">
                <h2 className='mb-5'>Free and open market education</h2>
                <p className='mb-3'>Varsity, the largest online stock market education book in the world covering everything from basics to advanced trading.</p>
                <a href=''>Varsity<i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-5 mb-3'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.

                    </p>
                    <a href=''>TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div> );
}

export default Education;