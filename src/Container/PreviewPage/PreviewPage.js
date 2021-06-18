import React, { useState, useEffect } from 'react';
import './PreviewPage.css';
import { BiChevronRight } from 'react-icons/bi';
import EditPanel from '../../Components/EditPanel/EditPanel';
const PreviewPage = () => {
  const [editPage, setEditPage] = useState(0);
  const [photo, setPhoto] = useState(0);
  return (
    <>
      <div className='p-container'>
        <EditPanel setPhoto={setPhoto} />
        <div className='preview'></div>
      </div>
    </>
  );
};

export default PreviewPage;
