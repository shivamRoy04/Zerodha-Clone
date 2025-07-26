import React from 'react';
function Pricing() {
    return ( <div className='container'>
        <div className='row'>
            <div className='col-4 p-5'>
                <h2 className='mb-4'>Unbeatable Pricing</h2>
                <p>We pioneerd the concept of discount broking and price transpirancy in India.Flat fees and no hidden charges</p>
              <a href=''>See Pricing <i class="fa-solid fa-arrow-right"> </i></a>
            </div>
            <div className="col-2">

            </div>
            <div className="col-6 p-5">
                          <div className="row text-center">
                            <div className="col border p-4">
                                <h1 className='mb-3'>&#x20B9;0</h1>
                                <p>Free equity delivery and direct mutual funds</p>
                            </div>
                            <div className="col border p-4">
                                    <h1 className='mb-3'>&#x20B9;20</h1>
                                    <p>Intraday and F&O</p>
                            </div>
                          </div>
            </div>
        </div>
    </div> );
}

export default Pricing;