import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoArrowUpCircleSharp } from 'react-icons/io5';
import { TiTick } from 'react-icons/ti';
import './CoverPhoto.css';
import { p1 } from './event-photo.jpg';
const CoverPhoto = ({ setPageNo, setPhoto }) => {
  const select = (e) => {};
  const [change, setChange] = useState(0);
  const [p, setP] = useState(0);
  const [plen, setPlen] = useState([false, false, false]);
  const tick = (e) => {
    let ele = e.target.id;
    ele = ele[1];
    // console.log(ele);
    let p = [...plen];
    p[0] = false;
    p[1] = false;
    p[2] = false;
    // console.log(p);
    if (!plen[ele - 1]) p[ele - 1] = true;
    // console.log(p);
    setPlen(p);
  };

  return (
    <>
      <div className='return'>
        <p onClick={() => setPageNo(0)}>
          <IoIosArrowBack className='back' />
          Back
        </p>
      </div>
      {change == 0 ? (
        <>
          <div className='head'>
            <p className='t'>Cover Photo</p>
            <p className='ch' onClick={() => setChange(1)}>
              Change photo
            </p>
          </div>
          <div
            className='photo'
            onClick={(e) => {
              setPhoto(0);
            }}
          ></div>
        </>
      ) : (
        <>
          <p className='t'>Upload or choose a cover photo</p>
          <div className='upload'>
            <IoArrowUpCircleSharp className='icn' />
            <p>Upload photo</p>
          </div>
          <div
            className='photo'
            id='p1'
            onClick={(e) => {
              setP(0);
              tick(e);
            }}
          >
            <div className={`select ${plen[0] ? 'blu' : ''}`}>
              {plen[0] ? <TiTick className='tk' /> : null}
            </div>
          </div>
          <div
            className='photo'
            id='p2'
            onClick={(e) => {
              setP(1);
              tick(e);
            }}
          >
            <div className={`select ${plen[1] ? 'blu' : ''}`}>
              {plen[1] ? <TiTick className='tk' /> : null}
            </div>
          </div>
          <div
            className='photo'
            id='p3'
            onClick={(e) => {
              setP(2);
              tick(e);
            }}
          >
            <div className={`select ${plen[2] ? 'blu' : ''}`}>
              {plen[2] ? <TiTick className='tk' /> : null}
            </div>
          </div>
          <div
            className='save'
            style={{ backgroundColor: 'black', color: 'white' }}
            onClick={() => {
              setPhoto(p);
              setChange(0);
            }}
          >
            Save
          </div>
        </>
      )}
    </>
  );
};

export default CoverPhoto;
