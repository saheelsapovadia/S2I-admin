import React, { useState, useEffect } from 'react';
import EventsModal from '../../Components/EventsModal/EventsModal';
import './AdminPage.css';
import { AiFillHome } from 'react-icons/ai';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import InternshipModal from '../../Components/InternshipModal/InternshipModal';
import axios from 'axios';
const AdminPage = ({ event, setEvent }) => {
  const [showEventsModal, setShowEventsModal] = useState(false);
  const [showinternshipModal, setShowInternshipModal] = useState(false);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [pageNo, setPageNo] = useState(0);
  const openEventsModal = () => {
    setShowEventsModal((prev) => !prev);
    scrollRecord();
  };
  const openInternshipModal = () => {
    setShowInternshipModal((prev) => !prev);
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
  const [keyword, setKeyword] = useState('');
  const [input, setInput] = useState('');
  const [compList, setCompList] = useState([]);
  const [compListDefault, setCompListDefault] = useState([]);
  useEffect(() => {
    axios
      .get(
        // 'https://restcountries.eu/rest/v2/region/europe?fields=name;capital;currencies'
        'https://restcountries.eu/rest/v2/all?fields=name;capital'
      )
      .then((res) => {
        setCompList(res.data);
        setCompListDefault(res.data);
      });
  }, []);
  const updateInput = async (input) => {
    const filtered = compListDefault.filter((company) => {
      return company.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setCompList(filtered);
  };
  useEffect(() => {
    updateInput(input);
  }, [input]);
  // console.log(compList);
  let len = compList.length / 4;
  // console.log(len);
  let companiesList1 = compList.map((coun, index) => {
    // console.log(index);
    if (index < len) {
      // console.log(index);
      return <p>{coun.name}</p>;
    }
  });
  let len2 = len * 2;
  let companiesList2 = compList.map((coun, index) => {
    if (index > len && index < len2) return <p>{coun.name}</p>;
  });
  let len3 = len * 3;
  let companiesList3 = compList.map((coun, index) => {
    if (index > len2 && index < len3) return <p>{coun.name}</p>;
  });
  let companiesList4 = compList.map((coun, index) => {
    if (index > len3) return <p>{coun.name}</p>;
  });
  console.log(companiesList1);
  return (
    <>
      <EventsModal
        showModal={showEventsModal}
        setShowModal={setShowEventsModal}
        scrollRemove={scrollRemove}
        eventMain={event}
        setEventMain={setEvent}
      />
      {/* <InternshipModal
        showModal={showinternshipModal}
        setShowModal={setShowInternshipModal}
        scrollRemove={scrollRemove}
      /> */}
      <div className='a-main'>
        <div className='left-panel'>
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
              <p className='btn' onClick={openInternshipModal}>
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
        <div className='right-panel'>
          <div className='topbar'>
            <p>{page.title}</p>
          </div>
          {page.title == 'Home' ? (
            <></>
          ) : page.title == 'Companies' ? (
            <>
              <div className='companies-list'>
                <div className='headerr'>
                  <p>Top Employers</p>
                  <input
                    style={{
                      width: '20rem',
                      background: '#F2F1F9',
                      border: 'none',
                      padding: '0.5rem',
                      marginLeft: 'auto',
                      marginRight: '5px',
                    }}
                    key='random1'
                    value={input}
                    placeholder={'search company'}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <p className='add-btn'> Add Company</p>
                </div>
                <div className='list'>
                  <div className='cols'>
                    {companiesList1}
                    {/* <p>Facebook</p>
                    <p>
                      Metropolitan Water Reclamation District of Greater Chicago
                    </p>
                    <p>Apple</p> */}
                  </div>
                  <div className='cols'>
                    {companiesList2}
                    {/* <p>McHenry County Conservation District</p>
                    <p>Google</p>
                    <p>West Michigan Environmental Action Council</p> */}
                  </div>
                  <div className='cols'>
                    {companiesList3}
                    {/* <p>Facebook</p>
                  <p>Pine Rest Psychological Consultation Center</p>
                  <p>Apple</p> */}
                  </div>
                  <div className='cols'>
                    {companiesList4}
                    {/* <p>Facebook</p>
                    <p>Pine Rest Psychological Consultation Center</p>
                    <p>Apple</p> */}
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
