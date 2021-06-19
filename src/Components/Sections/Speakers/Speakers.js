import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoArrowUpCircleSharp } from 'react-icons/io5';
import './Speakers.css';
import '../CoverPhoto/CoverPhoto.css';
import { MdEdit, MdDelete } from 'react-icons/md';
import { BsPeopleCircle } from 'react-icons/bs';
const Speakers = ({
  setPageNo,
  setPhoto,
  speaker,
  setSpeaker,
  speakerPic,
  setSpeakerPic,
}) => {
  const select = (e) => {};
  const [change, setChange] = useState(0);
  const [p, setP] = useState(0);
  const fileInput = useRef(null);

  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [company, setCompany] = useState('');
  const [bio, setBio] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [email, setEmail] = useState('');
  const [propic, setPropic] = useState(null);
  const [urlS, setUrlS] = useState('');
  const onFileChange = (e) => {
    setPropic(e.target.files[0]);
  };
  useEffect(() => {
    console.log(propic);
    // setUrlS(URL.createObjectURL(propic));
  }, [propic]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'title':
        setJob(value);
        break;
      case 'company':
        setCompany(value);
        break;
      case 'bio':
        setBio(value);
        break;
      case 'linkedin':
        setLinkedin(value);
        break;
      case 'email':
        setEmail(value);
        break;
    }
  };
  const createSpeaker = (e) => {
    let s = [
      ...speaker,
      {
        name: name,
        job: job,
        company: company,
        bio: bio,
        linkedin: linkedin,
        email: email,
        propic: propic,
      },
    ];
    setSpeaker(s);
  };
  let speakers = speaker.map((sp, index) => {
    return (
      <div className='ss'>
        {/* <div className='i'></div> */}
        <BsPeopleCircle className='pic' />
        <div className='name'>
          <p>{sp.name}</p>
          <p>{sp.job}</p>
        </div>
        <MdEdit className='edi' />
        <MdDelete className='del' />
      </div>
    );
  });
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
            <p className='t'>Speakers</p>
          </div>
          {speakers}

          <div
            className='save'
            style={{ backgroundColor: 'black', color: 'white' }}
            onClick={() => {
              setPhoto(p);
              setChange(1);
            }}
          >
            + Add new speaker
          </div>
        </>
      ) : (
        <>
          <div className='head'>
            <p className='t'>Speakers</p>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>Speaker name</p>
            <input
              type='text'
              name='name'
              onChange={handleChange}
              placeholder='Name'
              value={name}
            ></input>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>Job title</p>
            <input
              type='text'
              name='title'
              onChange={handleChange}
              placeholder='Title'
              value={job}
            ></input>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>
              Works at <span>(Optional)</span>
            </p>
            <input
              type='text'
              name='company'
              onChange={handleChange}
              placeholder='Company'
              value={company}
            ></input>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>
              Speaker bio <span>(Optional)</span>
            </p>
            <input
              type='text'
              name='bio'
              onChange={handleChange}
              placeholder='Say a little about the speaker '
              value={bio}
            ></input>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>
              LinkedIn <span>(Optional)</span>
            </p>
            <input
              type='text'
              name='linkedin'
              onChange={handleChange}
              placeholder='URL'
              value={linkedin}
            ></input>
          </div>
          <div className='field-content mt'>
            <p className='title-s'>Email</p>
            <input
              type='text'
              name='email'
              onChange={handleChange}
              placeholder='Email'
              value={email}
            ></input>
            <p className='footer'>
              Calendar reminders and unique zoom links will be sent to speaker's
              email address
            </p>
          </div>
          <div className='field-content ex'>
            <p className='title-s'>
              Profile photo <span>(Optional)</span>
            </p>
            <input
              type='file'
              id='file'
              name='file'
              ref={fileInput}
              onChange={onFileChange}
            />
            <div
              className='upload'
              onClick={(e) => {
                fileInput.current && fileInput.current.click();
                // onFileUpload();
              }}
            >
              {propic ? (
                <p>{propic.name}</p>
              ) : (
                <>
                  <IoArrowUpCircleSharp className='icn' />
                  <p>Upload photo</p>
                </>
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
              setPhoto(p);
              setChange(0);
              createSpeaker();
            }}
          >
            Save
          </div>
        </>
      )}
    </>
  );
};

export default Speakers;
