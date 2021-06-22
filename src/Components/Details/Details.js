import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { MdTitle } from 'react-icons/md';
import './Details.css';
export const Details = ({ setPageNo, event, setEvent }) => {
  const [title, setTitle] = useState(event.title);
  const [startDate, setStartDate] = useState(event.startDate);
  const [endDate, setEndDate] = useState(event.endDate);
  const [zone, setZone] = useState(event.zone);
  const [startTime, setStartTime] = useState(event.startTime);
  const [endTime, setEndTime] = useState(event.endTime);
  const [host, setHost] = useState(event.host);
  const [privacy, setPrivacy] = useState(event.privacy);
  const [meetLink, setMeetLink] = useState(event.meetLink);
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'host':
        OnClick4(e);
        setHost(value);
        break;
      case 'privacy':
        OnClick3(e);
        setPrivacy(value);
        break;
      case 'title':
        setTitle(value);
        break;
      case 'zone':
        setZone(value);
        break;
      case 'startDate':
        setStartDate(value);
        break;
      case 'endDate':
        setEndDate(value);
        break;
      case 'startTime':
        setStartTime(value);
        break;
      case 'endTime':
        setEndTime(value);
        break;
      case 'meet':
        setMeetLink(value);
    }
  };
  const [ifZoom, setIfZoom] = useState(0);
  const [ifVisible, setIfVisible] = useState(0);
  const OnClick3 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value == 'Public') {
      setIfVisible(1);
    } else if (e.target.value == 'Private') {
      setIfVisible(2);
    } else if (e.target.value == '') {
      setIfVisible(1);
    }
  };
  const OnClick4 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value == 'Zoom') {
      setIfZoom(1);
    } else if (e.target.value == 'Virtual') {
      setIfZoom(2);
    } else if (e.target.value == '') {
      setIfZoom(0);
    }
  };
  const saveEdits = (ev) => {
    let e = { ...event };
    e.title = title;
    e.startDate = startDate;
    e.endDate = endDate;
    e.startTime = startTime;
    e.endTime = endTime;
    e.zone = zone;
    e.host = host;
    e.meetLink = meetLink;
    e.privacy = privacy;
    setEvent(e);
    setPageNo(0);
  };
  return (
    <>
      {' '}
      <div className='return'>
        <p onClick={() => setPageNo(0)}>
          <IoIosArrowBack className='back' />
          Back
        </p>
      </div>
      <div className='field'>
        {/* <div className='img'>
          <MdTitle className='t' />
        </div> */}
        <div className='field-content w'>
          <p className='title'>Event title</p>
          <input
            type='text'
            name='title'
            onChange={handleChange}
            placeholder='Ex: IIT Hyderabad Career Fair'
            value={title}
          ></input>
        </div>
      </div>
      <div className='field'>
        {/* <div className='img'>
          <IoCalendarOutline className='t' />
        </div> */}
        <div className='field-content w'>
          <p className='title'>Date and time</p>
          <div className='r'>
            {/* <input
                          placeholder='Date'
                          class='textbox-n'
                          type='text'
                          onFocus={(e) => (e.target.type = 'date')}
                          // onMouseEnter={(e) => (e.target.type = 'date')}
                          onBlur={(e) => (e.target.type = 'text')}
                          id='date'
                        /> */}
            <input
              type='date'
              id='datepicker'
              name='startDate'
              placeholder='Start Date'
              onChange={handleChange}
              value={startDate}
              // onClick={setDatepicker()}
            ></input>
            <div className='prefSearch ps'>
              <input
                id='ts'
                value={startTime}
                name='startTime'
                placeholder='Start time'
                onChange={handleChange}
                // onClick={() => setShowSuggestions(true)}
                // onBlur={() => setShowSuggestions(false)}
              ></input>
              {/* {showSuggestions ? sug : ''} */}
            </div>
          </div>
          <div className='r'>
            <input
              type='date'
              name='endDate'
              id='datepicker'
              value={endDate}
              onChange={handleChange}
            ></input>

            <div className='prefSearch ps'>
              <input
                id='te'
                value={endTime}
                name='endTime'
                placeholder='End time'
                onChange={(e) => {
                  handleChange();
                }}
                // onClick={() => setShowSuggestions2(true)}
                // onBlur={() => setShowSuggestions(false)}
              ></input>
              {/* {showSuggestions2 ? sug2 : ''} */}
            </div>
          </div>

          <select
            id='ex'
            className=''
            name='zone'
            onChange={handleChange}
            value={zone}
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
      </div>
      <div className='field'>
        {/* <div className='img'>
          <FiMonitor className='t' />
        </div> */}
        <div className='field-content adjust w'>
          <p className='title'>Host Platform</p>
          <select
            id='ex'
            className=''
            name='host'
            value={host}
            onClick={(e) => {
              OnClick4(e);
            }}
            onChange={handleChange}
            // onChange={OnClick4}
            // value={from.month}
            // onChange={handleInput}
          >
            <option value=''>Select...</option>
            <option value='Zoom'>Zoom via Jumpstart</option>
            <option value='Virtual'>Add Virtual event link</option>

            {/* <option value='May'>May</option> */}
          </select>
          {ifZoom == 1 ? (
            <p className='footer'>
              500 max attendee capacity <br />
              Zoom links will be generated and automatically shared with the
              speakers and collaborators. Attendees will recieve their Zoom
              links one hour before the event starts.
            </p>
          ) : ifZoom == 2 ? (
            <input
              type='text'
              name='meet'
              onChange={handleChange}
              placeholder='www.meet.google.com'
              value={meetLink}
            ></input>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className='field'>
        {/* <div className='img'>
                      <MdLockOutline className='t' />
                    </div> */}
        <div className='field-content adjust w'>
          <p className='title'>Privacy</p>
          <select
            id='ex'
            className=''
            name='privacy'
            value={privacy}
            // onChange={handleInput}
            onChange={handleChange}
          >
            <option value=''>Select...</option>
            <option value='Public'>Public</option>
            <option value='Private'>Private</option>

            {/* <option value='May'>May</option> */}
          </select>
          {ifVisible == 1 ? (
            <p className='footer'>
              Your event will be discoverable on Jumpstart Marketplace
            </p>
          ) : ifVisible == 2 ? (
            <p className='footer'>
              Your event will not be discoverable on Jumpstart Marketplace
            </p>
          ) : (
            ''
          )}
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
          saveEdits();
        }}
      >
        Save
      </div>
    </>
  );
};
