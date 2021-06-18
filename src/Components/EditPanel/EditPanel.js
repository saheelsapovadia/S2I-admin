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
const EditPanel = ({ setPhoto }) => {
  const [pageNo, setPageNo] = useState(0);
  console.log(pageNo);
  return (
    <div className='edit-panel'>
      {pageNo == 0 ? (
        <>
          <button className='save'>Save and Exit</button>
          <p className='t'>Edit event</p>
          <div className='details'>
            <div className='title'>
              <p>Details</p>
              <p className='edit'>Edit details</p>
            </div>
            <div className='field-e'>
              <MdTitle className='t' />
              <p>Happy hours</p>
            </div>
            <div className='field-e'>
              <IoCalendarOutline className='t' />
              <p>
                Mon June 19, 2021, 7:00 PM to 8:00 PM
                <br /> (PDT)
              </p>
            </div>
            <div className='field-e'>
              <FiMonitor className='t' />
              <p>Zoom via Jumpstart</p>
            </div>
            <div className='field-e'>
              <MdLockOutline className='t' />
              <p>Private</p>
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
            <div className='options'>
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
        <CoverPhoto setPageNo={setPageNo} setPhoto={setPhoto} />
      ) : pageNo == 3 ? (
        <Speakers setPageNo={setPageNo} setPhoto={setPhoto} />
      ) : pageNo == 4 ? (
        <Agenda setPageNo={setPageNo} setPhoto={setPhoto} />
      ) : pageNo == 7 ? (
        <FeaturedJobs setPageNo={setPageNo} setPhoto={setPhoto} />
      ) : (
        ''
      )}
    </div>
  );
};

export default EditPanel;
