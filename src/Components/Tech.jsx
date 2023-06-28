import React from 'react'

const Tech = () => {
  return (
    <div className='flex justify-center' id='tech'>

      <div className="card bg-base-300 shadow-xl w-100">
        <div className="card-body flex flex-col items-center flex-wrap">
          <h2 className="card-title">Tech In My Toolbelt</h2>
          <div className='techCont flex justify-center gap-[2vw] flex-wrap'>
            <img src='./tech/svelte.png' className='h-[auto] w-[50px]'/>
            <img src='./tech/angular.png' className='h-[auto] w-[50px]'/>
            <img src='./tech/scss.png' className='h-[auto] w-[50px]'/>
            <img src='./tech/react.png' className='h-[auto] w-[50px]'/>
            <img src='./tech/tailwinds.png' className='h-[auto] w-[50px]'/>
            <img src='./tech/firebase.png' className='h-[auto] w-[50px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech