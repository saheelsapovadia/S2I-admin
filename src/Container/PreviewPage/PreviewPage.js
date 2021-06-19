import React, { useState, useEffect } from 'react';
import './PreviewPage.css';
import { BiChevronRight } from 'react-icons/bi';
import EditPanel from '../../Components/EditPanel/EditPanel';
import { IoLogoIonic } from 'react-icons/io';
import { BsPeopleCircle } from 'react-icons/bs';
import LI from './LI.png';
const PreviewPage = () => {
  const [editPage, setEditPage] = useState(0);
  const [photo, setPhoto] = useState(0);
  return (
    <>
      <div className='p-container'>
        <EditPanel setPhoto={setPhoto} />
        <div className='preview'>
          <div className='container-pre'>
            <div className='title'>
              <p>Your event preview</p>
            </div>
            <div className='cover-photo'></div>
            <div className='content-pre'>
              <div className='d1'>
                <div className='d1-a'>
                  <IoLogoIonic className='logo' />
                  <div className='d1-head'>
                    <p> Mon June 19, 2021 @7:00 PM to 8:00 PM </p>
                    <p>Happy hour</p>
                  </div>
                </div>
                <div className='rsvp'>
                  <div>
                    <p>RSVP</p>
                  </div>
                </div>
              </div>
              <hr className='hh' />
              <div className='d2'>
                <div className='d2-a'>
                  <p>Description</p>
                  <p>
                    Use this section to give details about your event. What it
                    will be about? What attendees learn?
                    <br />
                    <br />
                    Well organized and easy to understand Web building tutorials
                    with lots of examples of how to use HTML, CSS, JavaScript,
                    SQL, Python, PHP, Bootstrap, Java, ...
                  </p>
                </div>

                <div className='d2-b'>
                  <p>Date and time</p>
                  <p>Aug 17, 2020, 7:00PM - Aug 17, 2020, 8:00PM</p>
                </div>
              </div>
              <hr className='hh' />
              <div className='d3'>
                <p>Speakers</p>
                <div className='speaker'>
                  <div className='speaker-pic'>
                    <BsPeopleCircle className='ic' />
                  </div>
                  <div className='speaker-bio'>
                    <p className='name'>Speaker name</p>
                    <div className='sub'>
                      <p>Job title @ Jumpstart </p>

                      <img className='LI' src={LI} />
                    </div>
                    <p>
                      Use this section to give details about your event. What it
                      will be about? What attendees learn?
                      <br />
                      <br />
                      Well organized and easy to understand Web building
                      tutorials with lots of examples of how to use HTML, CSS,
                      JavaScript, SQL, Python, PHP, Bootstrap, Java, ...
                    </p>
                  </div>
                </div>
                <div className='speaker'>
                  <div className='speaker-pic'>
                    <BsPeopleCircle className='ic' />
                  </div>
                  <div className='speaker-bio'>
                    <p className='name'>Speaker name</p>
                    <div className='sub'>
                      <p>Job title @ Jumpstart </p>

                      <img className='LI' src={LI} />
                    </div>
                    <p>
                      Use this section to give details about your event. What it
                      will be about? What attendees learn?
                      <br />
                      <br />
                      Well organized and easy to understand Web building
                      tutorials with lots of examples of how to use HTML, CSS,
                      JavaScript, SQL, Python, PHP, Bootstrap, Java, ...
                    </p>
                  </div>
                </div>
                <div className='speaker'>
                  <div className='speaker-pic'>
                    <BsPeopleCircle className='ic' />
                  </div>
                  <div className='speaker-bio'>
                    <p className='name'>Speaker name</p>
                    <div className='sub'>
                      <p>Job title @ Jumpstart </p>

                      <img className='LI' src={LI} />
                    </div>
                    <p>
                      Use this section to give details about your event. What it
                      will be about? What attendees learn?
                      <br />
                      <br />
                      Well organized and easy to understand Web building
                      tutorials with lots of examples of how to use HTML, CSS,
                      JavaScript, SQL, Python, PHP, Bootstrap, Java, ...
                    </p>
                  </div>
                </div>
              </div>
              <hr className='hh' />
              <div className='d4'>
                <p>Agenda</p>
              </div>
              <hr className='hh' />
              <div className='d5'>
                <p>Text block</p>
              </div>
              <hr className='hh' />
              <div className='d6'>
                <p>Gallery</p>
              </div>
              <hr className='hh' />
              <div className='d7'>
                <p>Featured jobs</p>
              </div>
              <hr className='hh' />

              <div className='d8'>
                <p>About Jumpstart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewPage;
