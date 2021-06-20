import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoArrowUpCircleSharp } from 'react-icons/io5';
import '../Speakers/Speakers.css';
import '../CoverPhoto/CoverPhoto.css';
import './Agenda.css';
const Agenda = ({ setPageNo, setPhoto }) => {
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
            <p className='t'>Agenda</p>
          </div>
          <div
            className='save'
            style={{ backgroundColor: 'black', color: 'white' }}
            onClick={() => {
              setPhoto(p);
              setChange(1);
            }}
          >
            + Add new item
          </div>
        </>
      ) : (
        <>
          <div className='head'>
            <p className='t'>Agenda</p>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>Item name</p>
            <input
              type='text'
              name='title'
              //   onChange={handleChange}
              placeholder='Name'
              //   value={title}
            ></input>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>Date</p>
            <input
              type='date'
              name='title'
              //   onChange={handleChange}
              placeholder='Name'
              //   value={title}
            ></input>
          </div>
          <div className='timee'>
            <input
              id='te'
              className='st'
              // value={endTime}
              name='startTime'
              placeholder='Start time'

              // onChange={(e) => {
              //   handleChange();
              // }}
              // onClick={() => setShowSuggestions2(true)}
              // // onBlur={() => setShowSuggestions(false)}
            ></input>
            <input
              id='te'
              // value={endTime}
              className='et'
              name='endTime'
              placeholder='End time'
              // onChange={(e) => {
              //   handleChange();
              // }}
              // onClick={() => setShowSuggestions2(true)}
              // // onBlur={() => setShowSuggestions(false)}
            ></input>
            {/* {showSuggestions2 ? sug2 : ''} */}
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
            Add
          </div>
        </>
      )}
    </>
  );
};

export default Agenda;
