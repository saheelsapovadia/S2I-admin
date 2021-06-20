import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoArrowUpCircleSharp } from 'react-icons/io5';
import '../Speakers/Speakers.css';
import '../CoverPhoto/CoverPhoto.css';
import '../Agenda/Agenda.css';
import '../FeaturedJobs/FeaturedJobs.css';
import './TextBlock.css';
const TextBlock = ({ setPageNo, textBlock, setTextBlock }) => {
  const [change, setChange] = useState(0);
  const [temp, setTemp] = useState(textBlock);
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
            <p className='t'>Text Block</p>
          </div>
          <div className='tb'>
            <textarea
              value={temp}
              onChange={(e) => {
                setTemp(e.target.value);
              }}
            ></textarea>
          </div>
          <div
            className='save'
            style={{ backgroundColor: 'black', color: 'white' }}
            onClick={() => {
              setPageNo(0);
              setTextBlock(temp);
            }}
          >
            Save
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TextBlock;
