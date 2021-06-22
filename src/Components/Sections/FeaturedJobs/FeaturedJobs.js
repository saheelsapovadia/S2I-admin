import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoArrowUpCircleSharp } from 'react-icons/io5';
import '../Speakers/Speakers.css';
import '../CoverPhoto/CoverPhoto.css';
import '../Agenda/Agenda.css';
import './FeaturedJobs.css';

import { MdEdit, MdDelete } from 'react-icons/md';
import { BsPeopleCircle } from 'react-icons/bs';
const FeaturedJobs = ({ setPageNo, ftJobs, setFtJobs }) => {
  const select = (e) => {};
  const [change, setChange] = useState(0);
  const [p, setP] = useState(0);
  const [temp, setTemp] = useState(ftJobs);
  const [job, setJob] = useState();
  const [edit, setEdit] = useState(0);

  const handleChange = (e) => {
    const { value } = e.target;
    setJob(value);
  };
  const addNew = (e) => {
    var j = [...ftJobs, job];
    setFtJobs(j);
  };

  let jobs = ftJobs.map((job, index) => {
    // console.log(index);
    return (
      <div className='ss'>
        {/* <div className='i'></div> */}
        <BsPeopleCircle className='pic' />
        <div className='name'>
          <p>{job}</p>
        </div>
        {/* <MdEdit
          className='edi'
          onClick={() => {
            setEdit(index);
            setChange(2);
            setJob(job[index]);
          }}
        /> */}
        <MdDelete
          className='j'
          onClick={() => {
            deletee(index);
          }}
        />
      </div>
    );
  });
  const deletee = (ind) => {
    let j = [...ftJobs];
    let newJ = j.filter((sp, index) => {
      return index != ind;
    });
    // console.log(newS);
    setFtJobs(newJ);
  };
  // console.log(job);
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
          {jobs}
          <div
            className='save'
            style={{ backgroundColor: 'black', color: 'white' }}
            onClick={() => {
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
              onChange={handleChange}
              // value={from.month}
              // onChange={handleInput}
              // onClick={(e) => {
              //   setJob(e.target.value);
              //   console.log(job);
              // }}
            >
              <option value='Select'>Select...</option>
              <option value='Motion Design Intern'>Motion Design Intern</option>
              <option value='Developer Intern'>Developer Intern</option>
              <option value='Cloud Intern'>Cloud Intern</option>
              <option value='UX/UI Design Intern'>UX/UI Design Intern</option>
              {/* <option value='May'>May</option> */}
            </select>
          </div>
          <div
            className='save'
            style={{ backgroundColor: 'black', color: 'white' }}
            onClick={() => {
              setChange(0);
              addNew();
            }}
          >
            Save
          </div>
        </>
      )}
    </>
  );
};

export default FeaturedJobs;
