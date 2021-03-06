import React, { useState, useEffect } from 'react';
import './PreviewPage.css';
import { BiChevronRight } from 'react-icons/bi';
import EditPanel from '../../Components/EditPanel/EditPanel';
import { IoLogoIonic, IoIosPeople } from 'react-icons/io';
// IoIosPeople
import { IoLocationSharp } from 'react-icons/io5';
import { BsPeopleCircle, BsBookmark } from 'react-icons/bs';
// import { FaRegBookmark } from 'react-icons/fa';
import { TiArrowBackOutline } from 'react-icons/ti';
import LI from './LI.png';
import { useHistory } from 'react-router';
const PreviewPage = ({ events, setEvents, match }) => {
  const [editPage, setEditPage] = useState(0);
  const [photo, setPhoto] = useState(4);
  const [url, setUrl] = useState('');
  const [speakerPic, setSpeakerPic] = useState(null);
  const [speaker, setSpeaker] = useState([]);
  const [agenda, setAgenda] = useState([]);
  const [textBlock, setTextBlock] = useState('');
  const [ftJobs, setFtJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState({});
  const [divb, setDivb] = useState({});
  useEffect(() => {
    if (events.length - 1 >= match.params.param1) {
      setLoading(false);
      setEvent(events[match.params.param1]);
      setPhoto(events[match.params.param1].photo);
      setUrl(events[match.params.param1].url);
      setDivb({
        backgroundImage: 'url(/' + events[match.params.param1].url + ')',
        backgroundSize: 'cover',
      });
      if (events[match.params.param1].speakers)
        setSpeaker(events[match.params.param1].speakers);
      if (events[match.params.param1].agendas)
        setAgenda(events[match.params.param1].agendas);
      if (events[match.params.param1].textBlock)
        setTextBlock(events[match.params.param1].textBlock);
      if (events[match.params.param1].ftJobs)
        setFtJobs(events[match.params.param1].ftJobs);
    } else {
    }
  }, []);
  // console.log('setting ', event, events[match.params.param1]);
  // console.log(match.params.param1);

  // useEffect(() => {
  //   console.log(photo);
  //   if (photo == 1) {
  //     setUrl('event-photo.jpg');
  //   } else if (photo == 2) {
  //     setUrl('cover2.jpg');
  //   } else if (photo == 3) {
  //     setUrl('cover3.jpg');
  //   } else if (photo == 4) {
  //     setUrl('cover4.jpg');
  //   }
  // }, [photo]);
  const history = useHistory();
  const saveEventChanges = () => {
    let eventModified = {
      ...event,
      photo: photo,
      url: url,
      speakers: speaker,
      agendas: agenda,
      ftJobs: ftJobs,
    };
    setEvent(eventModified);
    let allEvents = [...events];
    allEvents[match.params.param1] = eventModified;
    setEvents(allEvents);
    console.log('Saving State...', allEvents);
    history.push({ pathname: '/' });
  };

  useEffect(() => {
    console.log('url', url);

    let db = {
      backgroundImage: 'url(/' + url + ')',
      backgroundSize: 'cover',
    };
    setDivb(db);
  }, [url]);
  // console.log(textBlock);
  let speakers = speaker.map((sp, index) => {
    return (
      <div className='speaker'>
        <div className='speaker-pic'>
          <BsPeopleCircle className='ic' />
        </div>
        <div className='speaker-bio'>
          <p className='name'>{sp.name}</p>
          <div className='sub'>
            <p>
              {sp.job} @ {sp.company}{' '}
            </p>

            <img className='LI' src={LI} />
          </div>
          <p>
            {sp.bio}
            <br />
            <br />
          </p>
        </div>
      </div>
    );
  });
  let agendas = agenda.map((agenda, index) => {
    return (
      <div>
        <p>{agenda.name}</p>
        <p>{agenda.startTime}</p>
        <p>{agenda.endTime}</p>
      </div>
    );
  });
  let jobs = ftJobs.map((job, index) => {
    // console.log(job);
    return (
      <div className='card'>
        <div className='content'>
          <IoLogoIonic className='logo' />
          <p>{job}</p>
          <p>Jumpstart - Internship</p>
          <p>
            <IoLocationSharp className='location' />
            San Francisco, CA
          </p>
          <div className='header'>
            <IoIosPeople className='peop' />
            <p>81 participants</p>
          </div>
        </div>
        <div className='footer'>
          {/* <FaRegBookmark className='bookmark' /> */}
          <BsBookmark className='bookmark' />
          <TiArrowBackOutline className='back-arr' />
          <p>Learn More</p>
        </div>
      </div>
    );
  });
  // console.log(ftJobs);
  return (
    <>
      {loading ? (
        <>
          <div className='no-event-found'>
            <p>No such event found!</p>
          </div>
        </>
      ) : (
        <div className='p-container'>
          <EditPanel
            setPhoto={setPhoto}
            photo={photo}
            url={url}
            setUrl={setUrl}
            event={event}
            setEvent={setEvent}
            speakerPic={speakerPic}
            setSpeakerPic={setSpeakerPic}
            speaker={speaker}
            setSpeaker={setSpeaker}
            agenda={agenda}
            setAgenda={setAgenda}
            textBlock={textBlock}
            setTextBlock={setTextBlock}
            ftJobs={ftJobs}
            setFtJobs={setFtJobs}
            saveEventChanges={saveEventChanges}
          />
          <div className='preview'>
            <div className='container-pre'>
              <div className='title'>
                <p>Your event preview</p>
              </div>
              <div
                className='cover-photo'
                style={
                  divb
                  //   {
                  //   backgroundImage: "url('/cover2.jpg')",
                  // }
                }
              ></div>
              <div className='content-pre'>
                <div className='d1'>
                  <div className='d1-a'>
                    <IoLogoIonic className='logo' />
                    <div className='d1-head'>
                      <p>
                        {' '}
                        {event.startDate} @{event.startTime}{' '}
                      </p>
                      <p>{event.title}</p>
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
                  <div className='hide'></div>
                  <div className='d2-a'>
                    <p>Description</p>
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

                  <div className='d2-b'>
                    <p>Date and time</p>
                    <p>
                      {event.startDate} {event.startTime} - {event.endDate}{' '}
                      {event.endTime}
                    </p>
                  </div>
                </div>
                <hr className='hh' />
                <div className='d3'>
                  <p>Speakers</p>
                  {speaker.length > 0 ? (
                    <>{speakers}</>
                  ) : (
                    <>
                      <div className='hide'></div>
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
                            Use this section to give details about your event.
                            What it will be about? What attendees learn?
                            <br />
                            <br />
                            Well organized and easy to understand Web building
                            tutorials with lots of examples of how to use HTML,
                            CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java,
                            ...
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
                            Use this section to give details about your event.
                            What it will be about? What attendees learn?
                            <br />
                            <br />
                            Well organized and easy to understand Web building
                            tutorials with lots of examples of how to use HTML,
                            CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java,
                            ...
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <hr className='hh' />
                <div className='d4'>
                  <p>Agenda</p>
                  <div className='head'>
                    <p>Aug 17, 2020</p>
                    <p>Start Time</p>
                    <p>End Time</p>
                  </div>
                  {agenda.length == 0 ? (
                    <>
                      <div className='hide'></div>
                      <div>
                        <p>e.g. Introductions</p>
                        <p>3:00 PM</p>
                        <p>3:10 PM</p>
                      </div>
                      <div>
                        <p>e.g. Work at Jumpstart</p>
                        <p>3:10 PM</p>
                        <p>3:30 PM</p>
                      </div>
                      <div>
                        <p>e.g. Culture at Jumpstart</p>
                        <p>3:30 PM</p>
                        <p>3:40 PM</p>
                      </div>
                    </>
                  ) : (
                    <>{agendas}</>
                  )}
                </div>
                <hr className='hh' />
                <div className='d5'>
                  <p>Text block</p>
                  {textBlock.length > 0 ? (
                    <p>{textBlock}</p>
                  ) : (
                    <>
                      <div className='hide'></div>
                      <p>
                        If there is somethig extra special happening at the
                        event that is important, add it here!. A few options to
                        brainstorm you're throwing a hiring event...
                      </p>
                    </>
                  )}
                </div>
                <hr className='hh' />
                <div className='d6'>
                  <p>Gallery</p>
                  <div className='hide'></div>
                  <div className='pics'>
                    <div className='pic'>
                      <img src='ofc1.jpg' />
                    </div>
                    <div className='pic'>
                      <img src='ofc2.jpg' />
                    </div>
                    <div className='pic'>
                      <img src='ofc3.jpg' />
                    </div>
                    <div className='pic'>
                      <img src='ofc4.jpg' />
                    </div>
                    <div className='pic'>
                      <img src='ofc1.jpg' />
                    </div>
                    <div className='pic'>
                      <img src='ofc2.jpg' />
                    </div>
                    <div className='pic'>
                      <img src='ofc3.jpg' />
                    </div>
                    <div className='pic'>
                      <img src='ofc4.jpg' />
                    </div>
                    <div className='pic'>
                      <img src='ofc1.jpg' />
                    </div>
                    <div className='pic'>
                      <img src='ofc2.jpg' />
                    </div>
                    <div className='pic'>
                      <img src='ofc3.jpg' />
                    </div>
                    <div className='pic'>
                      <img src='ofc4.jpg' />
                    </div>
                  </div>
                </div>
                <hr className='hh' />
                <div className='d7'>
                  <p>Featured jobs</p>
                  <div className='cards'>
                    {ftJobs.length > 0 ? (
                      <> {jobs}</>
                    ) : (
                      <>
                        <div className='hide'></div>
                        <div className='card'>
                          <div className='content'>
                            <IoLogoIonic className='logo' />
                            <p>Motion Design Intern</p>
                            <p>Jumpstart - Internship</p>
                            <p>
                              <IoLocationSharp className='location' />
                              San Francisco, CA
                            </p>
                            <div className='header'>
                              <IoIosPeople className='peop' />
                              <p>81 participants</p>
                            </div>
                          </div>
                          <div className='footer'>
                            {/* <FaRegBookmark className='bookmark' /> */}
                            <BsBookmark className='bookmark' />
                            <TiArrowBackOutline className='back-arr' />
                            <p>Learn More</p>
                          </div>
                        </div>
                        <div className='card'>
                          <div className='content'>
                            <IoLogoIonic className='logo' />
                            <p>Motion Design Intern</p>
                            <p>Jumpstart - Internship</p>
                            <p>
                              <IoLocationSharp className='location' />
                              San Francisco, CA
                            </p>
                            <div className='header'>
                              <IoIosPeople className='peop' />
                              <p>81 participants</p>
                            </div>
                          </div>
                          <div className='footer'>
                            {/* <FaRegBookmark className='bookmark' /> */}
                            <BsBookmark className='bookmark' />
                            <TiArrowBackOutline className='back-arr' />
                            <p>Learn More</p>
                          </div>
                        </div>
                        <div className='card'>
                          <div className='content'>
                            <IoLogoIonic className='logo' />
                            <p>Motion Design Intern</p>
                            <p>Jumpstart - Internship</p>
                            <p>
                              <IoLocationSharp className='location' />
                              San Francisco, CA
                            </p>
                            <div className='header'>
                              <IoIosPeople className='peop' />
                              <p>81 participants</p>
                            </div>
                          </div>
                          <div className='footer'>
                            {/* <FaRegBookmark className='bookmark' /> */}
                            <BsBookmark className='bookmark' />
                            <TiArrowBackOutline className='back-arr' />
                            <p>Learn More</p>
                          </div>
                        </div>
                        <div className='card'>
                          <div className='content'>
                            <IoLogoIonic className='logo' />
                            <p>Motion Design Intern</p>
                            <p>Jumpstart - Internship</p>
                            <p>
                              <IoLocationSharp className='location' />
                              San Francisco, CA
                            </p>
                            <div className='header'>
                              <IoIosPeople className='peop' />
                              <p>81 participants</p>
                            </div>
                          </div>
                          <div className='footer'>
                            {/* <FaRegBookmark className='bookmark' /> */}
                            <BsBookmark className='bookmark' />
                            <TiArrowBackOutline className='back-arr' />
                            <p>Learn More</p>
                          </div>
                        </div>
                        <div className='card'>
                          <div className='content'>
                            <IoLogoIonic className='logo' />
                            <p>Motion Design Intern</p>
                            <p>Jumpstart - Internship</p>
                            <p>
                              <IoLocationSharp className='location' />
                              San Francisco, CA
                            </p>
                            <div className='header'>
                              <IoIosPeople className='peop' />
                              <p>81 participants</p>
                            </div>
                          </div>
                          <div className='footer'>
                            {/* <FaRegBookmark className='bookmark' /> */}
                            <BsBookmark className='bookmark' />
                            <TiArrowBackOutline className='back-arr' />
                            <p>Learn More</p>
                          </div>
                        </div>
                        <div className='card'>
                          <div className='content'>
                            <IoLogoIonic className='logo' />
                            <p>Motion Design Intern</p>
                            <p>Jumpstart - Internship</p>
                            <p>
                              <IoLocationSharp className='location' />
                              San Francisco, CA
                            </p>
                            <div className='header'>
                              <IoIosPeople className='peop' />
                              <p>81 participants</p>
                            </div>
                          </div>
                          <div className='footer'>
                            {/* <FaRegBookmark className='bookmark' /> */}
                            <BsBookmark className='bookmark' />
                            <TiArrowBackOutline className='back-arr' />
                            <p>Learn More</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <hr className='hh' />

                <div className='d8'>
                  <p>About Jumpstart</p>
                  <div>
                    <div className='d8-a'>
                      <p>
                        Jumpstart helps take their recruiting strategies totally
                        virtual to hire diverse, early career candidates.
                      </p>
                    </div>

                    <div className='d8-b'>
                      <div>
                        <p>Industry: </p>
                        <p>Al & ML, Enterprise Software</p>
                      </div>
                      <div>
                        <p>location: </p>
                        <p>San Francisco, CA</p>
                      </div>
                      <div>
                        <p>Stage: </p>
                        <p>Early stage</p>
                      </div>
                      <div>
                        <p>Employees: </p>
                        <p>11-50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewPage;
