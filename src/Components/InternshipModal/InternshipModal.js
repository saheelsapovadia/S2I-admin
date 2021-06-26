import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { MdClose, MdTitle, MdLockOutline, MdLaptopMac } from 'react-icons/md';
import '../Modal/Modal.css';
import '../EventsModal/EventsModal.css';
import './InternshipModal.css';
import './TextEditor.css';
import zoom from '../EventsModal/zoom.png';
import { IoIosArrowBack } from 'react-icons/io';
import { IoCalendarOutline } from 'react-icons/io5';
import { FiMonitor } from 'react-icons/fi';
import { HiDuplicate } from 'react-icons/hi';
import { Editor, EditorState, RichUtils } from 'draft-js';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 1300;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const InternshipModal = ({ showModal, setShowModal, scrollRemove }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      scrollRemove();
      setCurrPage(1);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        scrollRemove();
        setCurrPage(1);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
  const closeEditProfileModal = () => {
    setShowModal((prev) => !prev);
    scrollRemove();
    setCurrPage(1);
  };
  const [currPage, setCurrPage] = useState(1);
  const onFormClick = (e) => {
    setCurrPage(currPage + 1);
  };
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleChange = (e) => {};
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const onEditorChange = (editorchange) => {
    setEditorState(editorchange);
    // setContentLength(editorState.length);
  };
  const _onBoldClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };
  const _onItalicClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };
  const _onUnderlineClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };
  const _onUnorderedClick = () => {
    onEditorChange(
      RichUtils.toggleBlockType(editorState, 'unordered-list-item')
    );
  };

  const _onOrderedClick = () => {
    onEditorChange(RichUtils.toggleBlockType(editorState, 'ordered-list-item'));
  };
  return (
    <>
      {showModal ? (
        <Background
          className='newbg background'
          onClick={closeModal}
          ref={modalRef}
        >
          <div
            className='ModalWrapper Modal__Fullscreen profile__modal event'
            showModal={showModal}
          >
            <CloseModalButton
              className='CloseModalButton'
              aria-label='Close modal'
              onClick={() => closeEditProfileModal()}
            />
            {currPage == 1 ? (
              <div className='container'>
                <p>Create an Internship/Experience</p>
                <div className='a-wrapper' style={{ marginTop: '24px' }}>
                  <p className='wrapper-t'>Quick Start</p>
                  <div className='event-card'>
                    <div className='card-img'>
                      {/* <img src={calender} /> */}
                      <HiDuplicate
                        className='event-icon rev'
                        style={{ color: 'orange' }}
                      />
                    </div>
                    <div className='card-content'>
                      <p className='card-title'>Duplicate Internship</p>
                      <p className='card-info'>
                        Choose an Internship to duplicate, tweak a few things,
                        and you are well on your way.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='a-wrapper'>
                  <p className='wrapper-t'>Create from scratch</p>
                  <div className='event-card' onClick={onFormClick}>
                    <div className='card-img'>
                      {/* <img src={calender} /> */}
                      <MdLaptopMac className='event-icon' />
                    </div>
                    <div className='card-content'>
                      <div
                        className='c-t'
                        // style={{ display: 'flex', flexDirection: 'row' }}
                      >
                        <p className='card-title'>New virtual Experience</p>{' '}
                        <div className='v1'></div>
                        <div className='zoom'>
                          <img src={zoom} />
                          <p>Zoom integration available</p>
                        </div>
                      </div>
                      <p className='card-info'>
                        Host via Zoom, or your preferred virtual conferencing
                        solution.
                      </p>
                    </div>
                  </div>
                  <div className='event-card' style={{ marginTop: '14px' }}>
                    <div className='card-img'>
                      {/* <img src={calender} /> */}
                      {/* <GiThreeFriends className='event-icon' /> */}
                    </div>
                    <div className='card-content'>
                      <p className='card-title'>
                        New In-person Internship/Experience
                      </p>
                      <p className='card-info'>
                        Guests will join you in the real world,face-to-face.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className='container'>
                  <IoIosArrowBack
                    className='back-icon'
                    onClick={() => setCurrPage(1)}
                  />
                  <p>Internship Details</p>
                  <div className='a-wrapper page2'>
                    <div className='field'>
                      <div className='img'>
                        <MdTitle className='t' />
                      </div>
                      <div className='field-content'>
                        <p className='title'>Internship title</p>
                        <input
                          className='title'
                          type='text'
                          name='title'
                          // onChange={handleChange}
                          placeholder='Ex: IIT Hyderabad Career Fair'
                          // value={title}
                        ></input>
                      </div>
                    </div>
                    <div className='field'>
                      <div className='img'>
                        <MdTitle className='t' />
                      </div>
                      <div className='field-content'>
                        <p className='title'>Internship Description</p>
                        <div className='editor'>
                          <Editor
                            editorState={editorState}
                            onChange={setEditorState}
                            placeholder='Give a brief description'
                            // readOnly={true}
                          />
                          <div class='editor__buttons'>
                            <div onClick={_onBoldClick}>
                              <svg
                                class='MuiSvgIcon-root'
                                focusable='false'
                                viewBox='0 0 24 24'
                                aria-hidden='true'
                              >
                                <path d='M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5.78c2.07 0 3.96-1.69 3.97-3.77.01-1.53-.85-2.84-2.15-3.44zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z'></path>
                              </svg>
                            </div>
                            <div onClick={_onItalicClick}>
                              <svg
                                class='MuiSvgIcon-root'
                                focusable='false'
                                viewBox='0 0 24 24'
                                aria-hidden='true'
                              >
                                <path d='M10 5.5c0 .83.67 1.5 1.5 1.5h.71l-3.42 8H7.5c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.71l3.42-8h1.29c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4h-5c-.83 0-1.5.67-1.5 1.5z'></path>
                              </svg>
                            </div>
                            <div onClick={_onUnderlineClick}>
                              <svg
                                class='MuiSvgIcon-root'
                                focusable='false'
                                viewBox='0 0 24 24'
                                aria-hidden='true'
                              >
                                <path d='M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z'></path>
                              </svg>
                            </div>
                            <div class='icons' onClick={_onUnorderedClick}>
                              <svg
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fas'
                                data-icon='list'
                                class='svg-inline--fa fa-list fa-w-16 fa-1x '
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 512 512'
                              >
                                <path
                                  fill='currentColor'
                                  d='M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'
                                ></path>
                              </svg>
                            </div>
                            <div class='icons' onClick={_onOrderedClick}>
                              <svg
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fas'
                                data-icon='list-ol'
                                class='svg-inline--fa fa-list-ol fa-w-16 fa-1x '
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 512 512'
                              >
                                <path
                                  fill='currentColor'
                                  d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'
                                ></path>
                              </svg>
                            </div>
                          </div>
                          {/* {lenExceeded ? (
                            <p style={{ color: 'red' }}>
                              <b>Exceeded maximum limit {contentLength}/500</b>
                            </p>
                          ) : (
                            <div style={{ color: 'grey' }}>
                              {contentLength}/500
                            </div>
                          )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='bottom-nav'>
                    <button>
                      {/* disabled={!allOK} onClick={createEvent}>  */}
                      Create Internship
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </Background>
      ) : (
        <></>
      )}
    </>
  );
};

export default InternshipModal;
