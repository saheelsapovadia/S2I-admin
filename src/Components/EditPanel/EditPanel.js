import React, { useState, useEffect } from 'react';
import '../../Container/PreviewPage/PreviewPage.css';
import { BiChevronRight } from 'react-icons/bi';
import { MdTitle, MdLockOutline, MdLaptopMac } from 'react-icons/md';
import { IoCalendarOutline } from 'react-icons/io5';
import { FiMonitor } from 'react-icons/fi';
import CoverPhoto from '../Sections/CoverPhoto/CoverPhoto';
import Speakers from '../Sections/Speakers/Speakers';
import Agenda from '../Sections/Agenda/Agenda';
import FeaturedJobs from '../Sections/FeaturedJobs/FeaturedJobs';
import TextBlock from '../Sections/TextBlock/TextBlock';
import { Details } from '../Details/Details';
const EditPanel = ({
  setPhoto,
  event,
  photo,
  setEvent,
  speaker,
  setSpeaker,
  speakerPic,
  setSpeakerPic,
  agenda,
  setAgenda,
  textBlock,
  setTextBlock,
  ftJobs,
  setFtJobs,
}) => {
  const [pageNo, setPageNo] = useState(0);
  // console.log(pageNo);
  return (
    <div className='edit-panel'>
      {pageNo == 0 ? (
        <>
          <button className='save'>Save and Exit</button>
          <p className='t'>Edit event</p>
          <div className='details'>
            <div className='title'>
              <p>Details</p>
              <p className='edit' onClick={() => setPageNo(8)}>
                Edit details
              </p>
            </div>
            <div className='field-e'>
              <MdTitle className='t' />
              <p>{event.title}</p>
            </div>
            <div className='field-e'>
              <IoCalendarOutline className='t' />
              <p>
                {event.startDate} {event.startTime} - {event.endDate}{' '}
                {event.endTime}
                <br /> (PDT)
              </p>
            </div>
            <div className='field-e'>
              <FiMonitor className='t' />
              <p>{event.host}</p>
            </div>
            <div className='field-e'>
              <MdLockOutline className='t' />
              <p>{event.privacy}</p>
            </div>
          </div>
          <div className='section'>
            <div className='title'>
              <p>Sections</p>
            </div>
            <div className='options' onClick={() => setPageNo(1)}>
              <div className='t'>
                <p>Cover photo</p>
              </div>
              <div className='editd'>
                <p className='edit'>Edit</p>
              </div>
            </div>
            <hr className='op' />
            <div className='options'>
              <div className='t'>
                <p>Event Description</p>
              </div>
              <div className='editd' id='arrow'>
                <BiChevronRight className='e-icon' />
              </div>
            </div>
            <hr className='op' />
            <div className='options' onClick={() => setPageNo(3)}>
              <div className='t'>
                <p>Speakers</p>
              </div>
              <div className='editd' id='arrow'>
                <BiChevronRight className='e-icon' />
              </div>
            </div>
            <hr className='op' />
            <div className='options' onClick={() => setPageNo(4)}>
              <div className='t'>
                <p>Agenda</p>
              </div>
              <div className='editd' id='arrow'>
                <BiChevronRight className='e-icon' />
              </div>
            </div>
            <hr className='op' />
            <div className='options' onClick={() => setPageNo(5)}>
              <div className='t'>
                <p>Text Block</p>
              </div>
              <div className='editd' id='arrow'>
                <BiChevronRight className='e-icon' />
              </div>
            </div>
            <hr className='op' />
            <div className='options'>
              <div className='t'>
                <p>Gallery</p>
              </div>
              <div className='editd' id='arrow'>
                <BiChevronRight className='e-icon' />
              </div>
            </div>
            <hr className='op' />
            <div className='options' onClick={() => setPageNo(7)}>
              <div className='t'>
                <p>Featured jobs</p>
              </div>
              <div className='editd' id='arrow'>
                <BiChevronRight className='e-icon' />
              </div>
            </div>
            <hr className='op' />
          </div>
        </>
      ) : pageNo == 1 ? (
        <CoverPhoto setPageNo={setPageNo} photo={photo} setPhoto={setPhoto} />
      ) : pageNo == 3 ? (
        <Speakers
          setPageNo={setPageNo}
          setPhoto={setPhoto}
          speakerPic={speakerPic}
          setSpeakerPic={setSpeakerPic}
          speaker={speaker}
          setSpeaker={setSpeaker}
        />
      ) : pageNo == 4 ? (
        <Agenda
          setPageNo={setPageNo}
          setPhoto={setPhoto}
          agenda={agenda}
          setAgenda={setAgenda}
        />
      ) : pageNo == 5 ? (
        <TextBlock
          setPageNo={setPageNo}
          textBlock={textBlock}
          setTextBlock={setTextBlock}
        />
      ) : pageNo == 7 ? (
        <FeaturedJobs
          setPageNo={setPageNo}
          ftJobs={ftJobs}
          setFtJobs={setFtJobs}
        />
      ) : pageNo == 8 ? (
        <Details setPageNo={setPageNo} event={event} setEvent={setEvent} />
      ) : (
        ''
      )}
    </div>
  );
};

export default EditPanel;
