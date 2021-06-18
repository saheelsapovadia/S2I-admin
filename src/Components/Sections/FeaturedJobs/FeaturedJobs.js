import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoArrowUpCircleSharp } from 'react-icons/io5';
import '../Speakers/Speakers.css';
import '../CoverPhoto/CoverPhoto.css';
import '../Agenda/Agenda.css';
const FeaturedJobs = ({ setPageNo, setPhoto }) => {
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
            <p className='t'>Featured jobs</p>
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
            <p className='t'>Featured jobs</p>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>Job</p>
            <select
              id='ex'
              className='job'
              name='zone'
              //   onChange={handleChange}
              // value={from.month}
              // onChange={handleInput}
            >
              <option value='Select'>Select...</option>
              <option value='PDT'>Pacific time - Los Angeles</option>
              <option value='MDT'>Denver</option>
              <option value='CDT'>Central time - Chicago</option>
              <option value='EDT'>Eastern time - New York</option>
              {/* <option value='May'>May</option> */}
            </select>
          </div>
        </>
      )}
    </>
  );
};

export default FeaturedJobs;
