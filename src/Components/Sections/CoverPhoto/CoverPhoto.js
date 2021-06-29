import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoArrowUpCircleSharp } from 'react-icons/io5';
import { TiTick } from 'react-icons/ti';
import './CoverPhoto.css';
import { p1 } from './event-photo.jpg';
import { p2 } from './cover2.jpg';
const CoverPhoto = ({ setPageNo, photo, setPhoto }) => {
  const select = (e) => {};
  const [change, setChange] = useState(0);
  const [p, setP] = useState(0);
  const [plen, setPlen] = useState([false, false, false, false]);
  const tick = (e) => {
    let ele = e.target.id;
    let back = document.getElementById(ele);

    ele = ele[1];
    // console.log(ele);
    let p = [...plen];
    p[0] = false;
    p[1] = false;
    p[2] = false;
    p[3] = false;
    // console.log(p);
    if (!plen[ele - 1]) p[ele - 1] = true;
    // console.log(p);
    setPlen(p);
  };
  const [url, setUrl] = useState('');
  useEffect(() => {
    if (photo == 1) {
      setUrl('event-photo.jpg');
    } else if (photo == 2) {
      setUrl('cover2.jpg');
    } else if (photo == 3) {
      setUrl('cover3.jpg');
    } else if (photo == 4) {
      setUrl('cover4.jpg');
    }
  }, [photo]);
  var divb = {
    backgroundImage: 'url(/' + url + ')',
    backgroundSize: 'cover',
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
            style={divb}
            // onClick={(e) => {
            //   setPhoto(0);
            // }}
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
            className='photo p1'
            id='p1'
            onClick={(e) => {
              setP(1);
              tick(e);
              // setPhoto(1)
            }}
          >
            <div className={`select ${plen[0] ? 'blu' : ''}`}>
              {plen[0] ? <TiTick className='tk' /> : null}
            </div>
          </div>
          <div
            className='photo p2'
            id='p2'
            onClick={(e) => {
              setP(2);
              tick(e);
              // setPhoto(2)
            }}
          >
            <div className={`select ${plen[1] ? 'blu' : ''}`}>
              {plen[1] ? <TiTick className='tk' /> : null}
            </div>
          </div>
          <div
            className='photo p3'
            id='p3'
            onClick={(e) => {
              setP(3);
              tick(e);
              // setPhoto(3)
            }}
          >
            <div className={`select ${plen[2] ? 'blu' : ''}`}>
              {plen[2] ? <TiTick className='tk' /> : null}
            </div>
          </div>
          <div
            className='photo p4'
            id='p4'
            onClick={(e) => {
              setP(4);
              tick(e);
              // setPhoto(4)
            }}
          >
            <div className={`select ${plen[3] ? 'blu' : ''}`}>
              {plen[3] ? <TiTick className='tk' /> : null}
            </div>
          </div>
          <div
            className='save'
            style={{ backgroundColor: 'black', color: 'white' }}
            onClick={() => {
              setPhoto(p);
              console.log(p);
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
