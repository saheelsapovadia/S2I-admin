import React, { useCallback, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdClose, MdTitle, MdLockOutline, MdLaptopMac } from 'react-icons/md';
import '../Modal/Modal.css';
import './EventsModal.css';

import zoom from './zoom.png';
// import { IoIosArrowBack } from 'react-icons/io';
// import { IoCalendarOutline } from 'react-icons/io5';
// import { FiMonitor } from 'react-icons/fi';
import { GiThreeFriends } from 'react-icons/gi';
import { HiDuplicate } from 'react-icons/hi';
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 1300;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const EventsModal = ({ showModal, setShowModal, scrollRemove }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      scrollRemove();
      setCurrPage(1);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        scrollRemove();
        setCurrPage(1);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
  const closeEditProfileModal = () => {
    setShowModal((prev) => !prev);
    scrollRemove();
    setCurrPage(1);
  };
  const [currPage, setCurrPage] = useState(1);

  const onFormClick = (e) => {
    setCurrPage(currPage + 1);
  };

  const dateTime = (e) => {
    e.preventDefault();
    let id = document.getElementById('datepicker');
    console.log(id);
    id.datetimepicker({
      allowInputToggle: true,
    });
  };
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [st, setSt] = useState('');
  const [showSuggestions2, setShowSuggestions2] = useState(false);
  const [et, setEt] = useState('');
  const [showSuggestions3, setShowSuggestions3] = useState(false);
  const [ex, setEx] = useState('');
  const OnClick1 = (e) => {
    e.preventDefault();

    let ins = document.getElementById('ts');
    setSt(e.target.innerText);
    setShowSuggestions(false);
  };

  const OnClick2 = (e) => {
    e.preventDefault();

    let ins = document.getElementById('te');
    setEt(e.target.innerText);
    setShowSuggestions2(false);
  };
  const [ifZoom, setIfZoom] = useState(false);
  const OnClick3 = (e) => {
    e.preventDefault();

    let ins = document.getElementById('ex');

    setEx(e.target.innerText);
    setShowSuggestions3(false);
  };
  const OnClick4 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value == 'Zoom') {
      setIfZoom(true);
    }
  };
  const close = () => {
    setShowSuggestions(false);
  };
  // const

  let sug = (
    <div className='preference__modal__suggestions' onBlur={close}>
      <span className='' key='1' onClick={OnClick1}>
        10:00pm
      </span>
      <span className='' key='2' onClick={OnClick1}>
        10:00pm
      </span>
      <span className='' key='3' onClick={OnClick1}>
        11:00pm{' '}
      </span>
      <span className='' key='4' onClick={OnClick1}>
        12:00pm{' '}
      </span>
      <span className='' key='3' onClick={OnClick1}>
        11:00pm{' '}
      </span>
      <span className='' key='4' onClick={OnClick1}>
        12:00pm{' '}
      </span>
      <span className='' key='3' onClick={OnClick1}>
        11:00pm{' '}
      </span>
      <span className='' key='4' onClick={OnClick1}>
        12:00pm{' '}
      </span>
      <span className='' key='3' onClick={OnClick1}>
        11:00pm{' '}
      </span>
      <span className='' key='4' onClick={OnClick1}>
        12:00pm{' '}
      </span>
    </div>
  );
  let sug2 = (
    <div className='preference__modal__suggestions' onBlur={close}>
      <span className='' key='1' onClick={OnClick2}>
        10:00pm
      </span>
      <span className='' key='2' onClick={OnClick2}>
        10:00pm
      </span>
      <span className='' key='3' onClick={OnClick2}>
        11:00pm{' '}
      </span>
      <span className='' key='4' onClick={OnClick2}>
        12:00pm{' '}
      </span>
      <span className='' key='3' onClick={OnClick2}>
        11:00pm{' '}
      </span>
      <span className='' key='4' onClick={OnClick2}>
        12:00pm{' '}
      </span>
      <span className='' key='3' onClick={OnClick2}>
        11:00pm{' '}
      </span>
      <span className='' key='4' onClick={OnClick2}>
        12:00pm{' '}
      </span>
      <span className='' key='3' onClick={OnClick2}>
        11:00pm{' '}
      </span>
      <span className='' key='4' onClick={OnClick2}>
        12:00pm{' '}
      </span>
    </div>
  );
  let sug3 = (
    <div className='preference__modal__suggestions' onBlur={close}>
      <span className='' key='1' onClick={OnClick3}>
        10:00pm
      </span>
      <span className='' key='2' onClick={OnClick3}>
        10:00pm
      </span>
      <span className='' key='2' onClick={OnClick3}>
        10:00pm
      </span>
    </div>
  );
  return (
    <>
      {showModal ? (
        <Background
          className='newbg background'
          onClick={closeModal}
          ref={modalRef}
        >
          <div
            className='ModalWrapper Modal__Fullscreen profile__modal event'
            showModal={showModal}
          >
            <CloseModalButton
              className='CloseModalButton'
              aria-label='Close modal'
              onClick={() => closeEditProfileModal()}
            />
            {currPage == 1 ? (
              <div className='container'>
                <p>Create an event</p>
                <div className='a-wrapper' style={{ marginTop: '24px' }}>
                  <p className='wrapper-t'>Quick Start</p>
                  <div className='event-card'>
                    <div className='card-img'>
                      {/* <img src={calender} /> */}
                      <HiDuplicate
                        className='event-icon rev'
                        style={{ color: 'orange' }}
                      />
                    </div>
                    <div className='card-content'>
                      <p className='card-title'>Duplicate event</p>
                      <p className='card-info'>
                        Choose an event to duplicate, tweak a few things, and
                        you are well on your way.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='a-wrapper'>
                  <p className='wrapper-t'>Create from scratch</p>
                  <div className='event-card' onClick={onFormClick}>
                    <div className='card-img'>
                      {/* <img src={calender} /> */}
                      <MdLaptopMac className='event-icon' />
                    </div>
                    <div className='card-content'>
                      <div
                        className='c-t'
                        // style={{ display: 'flex', flexDirection: 'row' }}
                      >
                        <p className='card-title'>New virtual event</p>{' '}
                        <div className='v1'></div>
                        <div className='zoom'>
                          <img src={zoom} />
                          <p>Zoom integration available</p>
                        </div>
                      </div>
                      <p className='card-info'>
                        Host via Zoom, or your preferred virtual conferencing
                        solution.
                      </p>
                    </div>
                  </div>
                  <div className='event-card' style={{ marginTop: '14px' }}>
                    <div className='card-img'>
                      {/* <img src={calender} /> */}
                      <GiThreeFriends className='event-icon' />
                    </div>
                    <div className='card-content'>
                      <p className='card-title'>New In-person event</p>
                      <p className='card-info'>
                        Guests will join you in the real world,face-to-face.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='container'>
                {/* <IoIosArrowBack
                  className='back-icon'
                  onClick={() => setCurrPage(1)}
                /> */}
                <p>Event Details</p>
                <div className='a-wrapper page2'>
                  <div className='field'>
                    <div className='img'>
                      <MdTitle className='t' />
                    </div>
                    <div className='field-content'>
                      <p className='title'>Event title</p>
                      <input
                        type='text'
                        placeholder='Ex: IIT Hyderabad Career Fair'
                      ></input>
                    </div>
                  </div>
                  <div className='field'>
                    <div className='img'>
                      {/* <IoCalendarOutline className='t' /> */}
                    </div>
                    <div className='field-content' id='fc'>
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
                          placeholder='Start Date'
                          // onClick={setDatepicker()}
                        ></input>
                        <div className='prefSearch'>
                          <input
                            id='ts'
                            value={st}
                            placeholder='Start time'
                            onChange={(e) => {
                              setSt(e.target.value);
                            }}
                            onClick={() => setShowSuggestions(true)}
                            // onBlur={() => setShowSuggestions(false)}
                          ></input>
                          {showSuggestions ? sug : ''}
                        </div>
                      </div>
                      <div className='r'>
                        <input type='date' id='datepicker'></input>

                        <div className='prefSearch'>
                          <input
                            id='te'
                            value={et}
                            placeholder='End time'
                            onChange={(e) => {
                              setEt(e.target.value);
                            }}
                            onClick={() => setShowSuggestions2(true)}
                            // onBlur={() => setShowSuggestions(false)}
                          ></input>
                          {showSuggestions2 ? sug2 : ''}
                        </div>
                      </div>

                      <select
                        id='ex'
                        className=''
                        name='fromMonth'
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
                  </div>
                  <div className='field'>
                    <div className='img'>
                      {/* <FiMonitor className='t' /> */}
                    </div>
                    <div className='field-content adjust'>
                      <p className='title'>Host Platform</p>
                      <select
                        id='ex'
                        className=''
                        name='fromMonth'
                        onClick={(e) => {
                          OnClick4(e);
                        }}
                        onChange={OnClick4}
                        // value={from.month}
                        // onChange={handleInput}
                      >
                        <option value='Select'>Select...</option>
                        <option value='Zoom'>Zoom via Jumpstart</option>
                        <option value='Virtual'>Add Virtual event link</option>

                        {/* <option value='May'>May</option> */}
                      </select>
                      {ifZoom ? (
                        <p className='footer'>
                          500 max attendee capacity <br />
                          Zoom links will be generated and automatically shared
                          with the speakers and collaborators. Attendees will
                          recieve their Zoom links one hour before the event
                          starts.
                        </p>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                  <div className='field'>
                    <div className='img'>
                      {/* <MdLockOutline className='t' /> */}
                    </div>
                    <div className='field-content adjust'>
                      <p className='title'>Privacy</p>
                      <select
                        id='ex'
                        className=''
                        name='fromMonth'
                        // value={from.month}
                        // onChange={handleInput}
                      >
                        <option value='Select'>Select...</option>
                        <option value='PDT'>Public</option>
                        <option value='MDT'>Private</option>

                        {/* <option value='May'>May</option> */}
                      </select>
                      <p className='footer'>
                        Your event will not be discoverable on Jumpstart
                        Marketplace
                      </p>
                    </div>
                  </div>
                </div>
                <div className='bottom-nav'>
                  <button>Create event</button>
                </div>
              </div>
            )}
          </div>
        </Background>
      ) : null}
    </>
  );
};

export default EventsModal;
