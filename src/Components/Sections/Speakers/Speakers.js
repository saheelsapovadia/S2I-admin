import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoArrowUpCircleSharp } from 'react-icons/io5';
import './Speakers.css';
import '../CoverPhoto/CoverPhoto.css';

const Speakers = ({ setPageNo, setPhoto }) => {
  const select = (e) => {};
  const [change, setChange] = useState(0);
  const [p, setP] = useState(0);
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
            <p className='t'>Speakers</p>
          </div>
          <div
            className='save'
            style={{ backgroundColor: 'black', color: 'white' }}
            onClick={() => {
              setPhoto(p);
              setChange(1);
            }}
          >
            + Add new speaker
          </div>
        </>
      ) : (
        <>
          <div className='head'>
            <p className='t'>Speakers</p>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>Speaker name</p>
            <input
              type='text'
              name='title'
              //   onChange={handleChange}
              placeholder='Name'
              //   value={title}
            ></input>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>Job title</p>
            <input
              type='text'
              name='title'
              //   onChange={handleChange}
              placeholder='Title'
              //   value={title}
            ></input>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>
              Works at <span>(Optional)</span>
            </p>
            <input
              type='text'
              name='title'
              //   onChange={handleChange}
              placeholder='Company'
              //   value={title}
            ></input>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>
              Speaker bio <span>(Optional)</span>
            </p>
            <input
              type='text'
              name='title'
              //   onChange={handleChange}
              placeholder='Say a little about the speaker '
              //   value={title}
            ></input>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>
              LinkedIn <span>(Optional)</span>
            </p>
            <input
              type='text'
              name='title'
              //   onChange={handleChange}
              placeholder='URL'
              //   value={title}
            ></input>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>Email</p>
            <input
              type='text'
              name='title'
              //   onChange={handleChange}
              placeholder='Email'
              //   value={title}
            ></input>
            <p className='footer'>
              Calendar reminders and unique zoom links will be sent to speaker's
              email address
            </p>
          </div>
          <div className='field-content ex'>
            <p className='title-s'>
              Profile photo <span>(Optional)</span>
            </p>
            <div className='upload'>
              <IoArrowUpCircleSharp className='icn' />
              <p>Upload photo</p>
            </div>
          </div>
          <div
            className='save'
            style={{
              backgroundColor: 'black',
              color: 'white',
              marginTop: '15px',
              width: '92%',
            }}
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

export default Speakers;
