import React from 'react';
import * as images from '../assets';

export default function Portfolio() {
  const styles = {
    img: { maxWidth: "250px" },
  };
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm m-4'>
          <a><img src={images.jate} style={styles.img}></img></a>
        </div>
        <div className='col-sm m-4'>
          <a><img src={images.charcreate} style={styles.img}></img></a>
        </div>
        <div className='col-sm m-4'>
          <a><img src={images.poemApp} style={styles.img}></img></a>
        </div>
        <div className='col-sm m-4'>
          <a><img src={images.profileDesign} style={styles.img}></img></a>
        </div>
        <div className='col-sm m-4'>
          <a><img src={images.readmeGenerator} style={styles.img}></img></a>
        </div>
        <div className='col-sm m-4'>
          <a><img src={images.spotifyList} style={styles.img}></img></a>
        </div>
      </div>
    </div>
  )
}
