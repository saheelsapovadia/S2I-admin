import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoArrowUpCircleSharp } from 'react-icons/io5';
import '../Speakers/Speakers.css';
import '../CoverPhoto/CoverPhoto.css';
import '../Agenda/Agenda.css';
import './FeaturedJobs.css';
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
          <div className='field-content mt fj'>
            <div>
              <p className='title-s'>Job</p>
              <p>Remove</p>
            </div>
            <select
              id='ex'
              className='job'
              name='zone'
              //   onChange={handleChange}
              // value={from.month}
              // onChange={handleInput}
            >
              <option value='Select'>Select...</option>
              <option value='PDT'>Motion Design Intern</option>
              <option value='MDT'>Developer Intern</option>
              <option value='CDT'>Cloud Intern</option>
              <option value='EDT'>UX/UI Design Intern</option>
              {/* <option value='May'>May</option> */}
            </select>
          </div>
        </>
      )}
    </>
  );
};

export default FeaturedJobs;
