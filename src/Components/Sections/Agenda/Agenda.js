import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoArrowUpCircleSharp } from 'react-icons/io5';
import '../Speakers/Speakers.css';
import '../CoverPhoto/CoverPhoto.css';
import './Agenda.css';
import { MdEdit, MdDelete } from 'react-icons/md';
import { BsPeopleCircle } from 'react-icons/bs';
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
  const clear = (e) => {
    setName('');
    setDate('');
    setStartTime('');
    setEndTime('');
    setChange(0);
    setP(0);
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
    setName('');
    setDate('');
    setStartTime('');
    setEndTime('');
    setChange(0);
    setP(0);
  };
  const [edit, setEdit] = useState(0);

  let agendas = agenda.map((ag, index) => {
    return (
      <div className='ss'>
        {/* <div className='i'></div> */}
        <BsPeopleCircle className='pic' />
        <div className='name'>
          <p>{ag.name}</p>
          <p>{ag.date}</p>
        </div>
        <MdEdit
          className='edi'
          onClick={() => {
            setEdit(index);
            setName(agenda[index].name);
            setDate(agenda[index].date);
            setStartTime(agenda[index].startTime);
            setEndTime(agenda[index].endTime);
            setChange(2);
          }}
        />
        <MdDelete
          className='del'
          onClick={() => {
            deletee(index);
          }}
        />
      </div>
    );
  });
  const saveEdits = (e) => {
    let a = [...agenda];
    a[edit].name = name;
    a[edit].date = date;
    a[edit].startTime = startTime;
    a[edit].endTime = endTime;

    setAgenda(a);
  };
  const deletee = (ind) => {
    let a = [...agenda];
    let newA = a.filter((sp, index) => {
      return index != ind;
    });
    // console.log(newA);
    setAgenda(newA);
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
          {agendas}
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
      ) : change == 1 ? (
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
      ) : change == 2 ? (
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
              saveEdits();
            }}
          >
            Save
          </div>
        </>
      ) : null}
    </>
  );
};

export default Agenda;
