import React, { useState, useEffect } from 'react';
import EventsModal from '../../Components/EventsModal/EventsModal';
import './AdminPage.css';
const AdminPage = () => {
  const [showEventsModal, setShowEventsModal] = useState(false);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();

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
  const [event, setEvent] = useState({});
  useEffect(() => {
    console.log(event);
  }, [event]);
  return (
    <>
      <EventsModal
        showModal={showEventsModal}
        setShowModal={setShowEventsModal}
        scrollRemove={scrollRemove}
        event={event}
        setEvent={setEvent}
      />
      <div className='a-main'>
        <button onClick={openEventsModal}>Create Event</button>
      </div>
    </>
  );
};

export default AdminPage;
