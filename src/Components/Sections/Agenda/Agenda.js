import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoArrowUpCircleSharp } from 'react-icons/io5';
import '../Speakers/Speakers.css';
import '../CoverPhoto/CoverPhoto.css';
import './Agenda.css';
const Agenda = ({ setPageNo, setPhoto, agenda, setAgenda }) => {
  const select = (e) => {};
  const [change, setChange] = useState(0);
  const [p, setP] = useState(0);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const handleChange = (e) => {
    let { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'startTime':
        setStartTime(value);
        break;
      case 'endTime':
        setEndTime(value);
        break;
    }
  };
  const save = (e) => {
    let c = [
      ...agenda,
      {
        name: name,
        date: date,
        startTime: startTime,
        endTime: endTime,
      },
    ];
    setAgenda(c);
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
              name='name'
              onChange={handleChange}
              placeholder='Name'
              value={name}
            ></input>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>Date</p>
            <input
              type='date'
              name='date'
              onChange={handleChange}
              placeholder='Name'
              value={date}
            ></input>
          </div>
          <div className='timee'>
            <input
              id='te'
              className='st'
              name='startTime'
              placeholder='Start time'
              onChange={(e) => {
                handleChange(e);
              }}
              value={startTime}
              // onClick={() => setShowSuggestions2(true)}
              // // onBlur={() => setShowSuggestions(false)}
            ></input>
            <input
              id='te'
              value={endTime}
              className='et'
              name='endTime'
              placeholder='End time'
              onChange={(e) => {
                handleChange(e);
              }}
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
              save();
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
