import React from 'react'

const Projects = () => {
  return (
    <div id='projects'>
        <h1 className='text-center p-4 font-bold text-2xl'>My Work</h1>

      <div className='projCont'>

        <div className="card w-96 bg-base-300 shadow-xl rounded-lg">
          <div className='enigmaCarousel'>
          <div className="carousel w-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
              <img src="./enigmamobiledrawer.png" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
              <img src="./enigmamobileInbox.png" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div> 
          </div>
          </div>

          <div className="card-body w-full">
            <h2 className="card-title">Enigma Chat App</h2>
            <div className="card-actions justify-end w-full">
              {/* dropdown will go here */}
              <div className="collapse collapse-arrow bg-base-100 w-full">
                <input type="radio" name="my-accordion-2"  /> 
                <div className="collapse-title text-xl font-medium">
                  Chat App Using ReactJS And Google's Firebase
                </div>
                <div className="collapse-content"> 
                  <p>This Is An Ongoing Project Designed And Built By Me Using Google's Firebase Realtime Database & Auth. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects