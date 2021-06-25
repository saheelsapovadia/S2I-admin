import React, { useState, useEffect } from 'react';
import EventsModal from '../../Components/EventsModal/EventsModal';
import './AdminPage.css';
import { AiFillHome } from 'react-icons/ai';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
const AdminPage = ({ event, setEvent }) => {
  const [showEventsModal, setShowEventsModal] = useState(false);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [pageNo, setPageNo] = useState(0);
  const openEventsModal = () => {
    setShowEventsModal((prev) => !prev);
    scrollRecord();
  };
  const scrollRecord = () => {
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    setLeft(left);
    setTop(top);
    document.body.className = 'modal-open';
    document.body.style.scrollTo = left;
    document.body.style.scroll = top;
    // document.body.style.overflow = 'hidden';
    // document.body.style.position = 'fixed';
    window.scrollTo(left, top);
  };
  const scrollRemove = () => {
    document.body.className = '';
    // document.body.style.overflow = 'auto';
    // document.body.style.position = 'relative';
    window.scrollTo(left, top);
  };
  const [page, setPage] = useState({
    title: '',
  });
  useEffect(() => {
    if (pageNo == 0) {
      let p = { ...page };
      p.title = 'Home';
      setPage(p);
    } else if (pageNo == 1) {
      let p = { ...page };
      p.title = 'Companies';
      setPage(p);
    }
  }, [pageNo]);
  return (
    <>
      <EventsModal
        showModal={showEventsModal}
        setShowModal={setShowEventsModal}
        scrollRemove={scrollRemove}
        eventMain={event}
        setEventMain={setEvent}
      />
      <div className='a-main'>
        <div className='right-panel'>
          <p className='heading'>Jumpstart</p>
          <div className='overview'>
            <p>Overview</p>
            <div
              className='overview-fields'
              onClick={() => {
                setPageNo(0);
              }}
            >
              <AiFillHome className='icn' />
              <p>Home</p>
            </div>
            <div
              className='overview-fields'
              onClick={() => {
                setPageNo(1);
              }}
            >
              <HiOutlineOfficeBuilding className='icn' />
              <p>Companies</p>
            </div>
          </div>
          <div className='my-events'>
            <div>
              <p>My Events</p>
              <p className='btn' onClick={openEventsModal}>
                Create Event
              </p>
            </div>
            <div className='overview-fields'>
              <p>Apple conf</p>
            </div>
            <div className='overview-fields'>
              <p>Facebook conf</p>
            </div>
            <div className='overview-fields'>
              <p>Google conf</p>
            </div>
          </div>
          <div className='my-events internship'>
            <div>
              <p>My Internships</p>
              <p className='btn' onClick={openEventsModal}>
                Create Internship
              </p>
            </div>
            <div className='overview-fields'>
              <p>Software Developer</p>
            </div>
            <div className='overview-fields'>
              <p>UX/UI Designer</p>
            </div>
          </div>
        </div>
        <div className='left-panel'>
          <div className='topbar'>
            <p>{page.title}</p>
          </div>
          {page.title == 'Home' ? (
            <></>
          ) : page.title == 'Companies' ? (
            <>
              <div className='companies-list'>
                <p>Top Employers</p>
                <div className='list'>
                  <div className='cols'>
                    <p>Facebook</p>
                    <p>
                      Metropolitan Water Reclamation District of Greater Chicago
                    </p>
                    <p>Apple</p>
                  </div>
                  <div className='cols'>
                    <p>McHenry County Conservation District</p>
                    <p>Google</p>
                    <p>West Michigan Environmental Action Council</p>
                  </div>
                  <div className='cols'>
                    <p>Facebook</p>
                    <p>Pine Rest Psychological Consultation Center</p>
                    <p>Apple</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
