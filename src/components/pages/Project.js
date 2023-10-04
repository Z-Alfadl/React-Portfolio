import React from 'react';
import screenShot from '../../assets/sleepy-sands-40695-90409c15eb50.herokuapp.com_.png';

export default function Portfolio() {
  const styles = {
    img: { maxWidth: "250px" },
  };
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm m-4'>
          <a><img src={screenShot} style={styles.img}></img></a>
        </div>
        {/* <div className='w-100'></div> */}
        <div className='col-sm m-4'>
          <a><img src={screenShot} style={styles.img}></img></a>
        </div>
        <div className='col-sm m-4'>
          <a><img src={screenShot} style={styles.img}></img></a>
        </div>
        <div className='col-sm m-4'>
          <a><img src={screenShot} style={styles.img}></img></a>
        </div>
      </div>
    </div>
  )
}
