import React, { useState, useEffect, useRef } from 'react';
import EventsModal from '../../Components/EventsModal/EventsModal';
import './AdminPage.css';
import { AiFillHome } from 'react-icons/ai';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import InternshipModal from '../../Components/InternshipModal/InternshipModal';
import axios from 'axios';
import { IoIosArrowBack } from 'react-icons/io';
import { IoArrowUpCircleSharp, IoCloseCircle } from 'react-icons/io5';
import { Editor, EditorState, RichUtils } from 'draft-js';
const CompanyPage = ({}) => {
  const [page, setPage] = useState('list');
  const [keyword, setKeyword] = useState('');
  const [input, setInput] = useState('');
  let data = [
    {
      id: 1,
      companyName: 'Reliance',
      companyLocation: ['Mumbai', 'Bangalore', 'Jamnagar', 'Ahmedabad'],
      companyDomain: ['Petrochemicals', 'Telecommunications', 'Retail', 'IT'],
    },
    {
      id: 2,
      companyName: 'Flipkart',
      companyLocation: ['Mumbai', 'Bangalore', 'Ahmedabad'],
      companyDomain: ['Retail', 'IT'],
    },
    {
      id: 3,
      companyName: 'Myntra',
      companyLocation: ['Bangalore', 'Ahmedabad'],
      companyDomain: ['Retail', 'IT'],
    },
    {
      id: 4,
      companyName: 'Infosys',
      companyLocation: ['Mumbai', 'Bangalore', 'Pune'],
      companyDomain: ['Telecommunications', 'IT'],
    },
    {
      id: 5,
      companyName: 'Tata',
      companyLocation: ['Mumbai', 'Bangalore', 'Ahmedabad', 'Pune'],
      companyDomain: ['Retail', 'IT', 'Power', 'Construction', 'Coal'],
    },
    {
      id: 6,
      companyName: 'Flipkart',
      companyLocation: ['Mumbai', 'Bangalore', 'Ahmedabad'],
      companyDomain: ['Retail', 'IT'],
    },
    {
      id: 7,
      companyName: 'Airtel',
      companyLocation: ['Mumbai', 'Bangalore', 'Ahmedabad', 'Gurgaon'],
      companyDomain: ['Retail', 'IT', 'Telecommunications'],
    },
    {
      id: 8,
      companyName: 'Atel',
      companyLocation: ['Mumbai', 'Ahmedabad', 'Gurgaon'],
      companyDomain: ['Retail', 'IT', 'Telecommunications'],
    },
    {
      id: 9,
      companyName: 'tel',
      companyLocation: ['Mumbai', 'Bangalore', 'Ahmedabad', 'Gurgaon'],
      companyDomain: ['Retail', 'Power', 'Telecommunications'],
    },
    {
      id: 10,
      companyName: 'Jabong',
      companyLocation: ['Mumbai', 'Bangalore', 'Hyderabad', 'Gurgaon'],
      companyDomain: ['IT'],
    },
    {
      id: 11,
      companyName: 'Jtel',
      companyLocation: ['Mumbai', 'Bangalore', 'Ahmedabad', 'Gurgaon'],
      companyDomain: ['Retail', 'IT', 'Telecommunications'],
    },
    {
      id: 12,
      companyName: 'Rel',
      companyLocation: ['Mumbai', 'Ahmedabad', 'Gurgaon'],
      companyDomain: ['Retail', 'IT', 'Telecommunications'],
    },
    {
      id: 13,
      companyName: 'Amazon',
      companyLocation: ['Mumbai', 'Bangalore', 'Ahmedabad', 'Gurgaon'],
      companyDomain: ['Retail', 'Power', 'Telecommunications'],
    },
    {
      id: 14,
      companyName: 'Nott',
      companyLocation: ['Mumbai', 'Bangalore', 'Hyderabad', 'Gurgaon'],
      companyDomain: ['Retail', 'IT'],
    },
  ];
  const [compList, setCompList] = useState(data);
  const [compListDefault, setCompListDefault] = useState(data);
  // useEffect(() => {
  //   axios
  //     .get(
  //       // 'https://restcountries.eu/rest/v2/region/europe?fields=name;capital;currencies'
  //       'https://restcountries.eu/rest/v2/all?fields=name;capital'
  //     )
  //     .then((res) => {
  //       setCompList(res.data);
  //       setCompListDefault(res.data);
  //     });
  // }, []);
  // useEffect(() => {
  //   console.log(data);
  //   setCompList(data);
  //   setCompListDefault(data);
  //   // console.log('setting compList...');
  // }, []);
  useEffect(() => {
    console.log(compList);
  }, [compList]);

  const updateInput = async (input) => {
    // console.log('filtering...');
    // const filtered = compListDefault.filter((company) => {
    //   let flag = false;
    //   // console.log('retruning..');
    //   if (company.companyName.toLowerCase().includes(input.toLowerCase())) {
    //     flag = true;
    //     console.log(company.companyName);
    //   }
    //   for (var location in company.companyLocation) {
    //     if (location.toLowerCase().includes(input.toLowerCase())) {
    //       flag = true;
    //       console.log('location found:' + location);
    //     }
    //   }
    //   for (var domain in company.companyDomain) {
    //     if (domain.toLowerCase().includes(input.toLowerCase())) {
    //       flag = true;
    //       console.log('domain found:' + domain);
    //     }
    //   }
    //   //     company.companyLocation.filter((location) => {
    //   //       return location.toLowerCase().includes(input.toLowerCase());
    //   //  else if (
    //   //     company.companyDomain.filter((Domain) => {
    //   //       return Domain.toLowerCase().includes(input.toLowerCase());
    //   //     })
    //   //   ) {
    //   //     flag = true;
    //   //     console.log(flag);
    //   //     return flag;
    //   //   }
    //   return flag;
    // });
    // setInput(input);
    // setCompList(filtered);
  };

  // useEffect(() => {
  //   updateInput(input);
  // }, [input]);

  const enterTag = (e) => {
    if (e.key === 'Enter') {
      console.log('Tag added..');
      let t = [...tags];
      t.push(e.target.value);
      setTags(t);
      setInput('');
    }
  };
  const removeTag = (e) => {
    let t = [...tags];
    console.log('Tag removed..', e.target.id);
    const { id } = e.target;
    console.log(id);
    let newT = t.filter((tag, index) => {
      return tag !== e.target.id;
    });
    console.log(newT);
    setTags(newT);
  };
  // const [List, setList] = useState(compList);
  // useEffect(() => {
  //   console.log('list:', List);
  // }, [List]);
  const [tags, setTags] = useState([]);
  const tagFilter = () => {
    let List = [...compListDefault];
    console.log('compList: ', compList);
    // setList(compList);
    console.log('New list: ', List);
    console.log(tags.length);

    if (tags.length == 0) {
      console.log('setting default...');
      setCompList(compListDefault);
    } else {
      console.log('else...');
      var i = 0;
      for (var tag in tags) {
        console.log('index: ' + i, tags[tag]);
        i++;
        let filteredResults = [];
        for (var company in List) {
          let flag = false;
          console.log('Current company: ', List[company]);
          if (
            List[company].companyName.toLowerCase() == tags[tag].toLowerCase()
          ) {
            console.log(
              'Tag:',
              tags[tag],
              'companyName:',
              List[company].companyName.toLowerCase()
            );
            flag = true;
            console.log(List[company].companyName);
            filteredResults.push(List[company]);
            console.log('same name found', 'filteredResults', filteredResults);
            continue;
          }
          for (var location in List[company].companyLocation) {
            console.log(
              'Tag:',
              tags[tag],
              'companyLocation:',
              List[company].companyLocation[location].toLowerCase()
            );
            if (
              List[company].companyLocation[location].toLowerCase() ==
              tags[tag].toLowerCase()
            ) {
              flag = true;
              console.log(
                'location found:' + List[company].companyLocation[location]
              );
              break;
            }
          }
          if (flag) {
            filteredResults = [...filteredResults, List[company]];
            console.log('filteredResults', filteredResults);
            continue;
          }
          console.log('check before DOMAIN:', flag);
          for (var domain in List[company].companyDomain) {
            console.log(
              'Tag:',
              tags[tag],
              'companyDomain:',
              List[company].companyDomain[domain].toLowerCase()
            );
            if (
              List[company].companyDomain[domain].toLowerCase() ==
              tags[tag].toLowerCase()
            ) {
              flag = true;
              console.log(
                'domain found:' + List[company].companyDomain[domain]
              );
              break;
            }
          }
          if (flag) {
            filteredResults = [...filteredResults, List[company]];
            console.log('filteredResults', filteredResults);
            continue;
          }
        }
        console.log('final filteredResults', filteredResults);
        if (filteredResults) {
          List = filteredResults;
        } else {
        }
        console.log('updated list: ', List);
      }
      setCompList(List);
    }
  };
  useEffect(() => {
    console.log('Executing the tagFilter..');
    tagFilter();
    console.log('tags', tags);
  }, [tags]);

  let Tags = tags.map((tag, index) => {
    return (
      <div className='tag-con'>
        <p className='tag'>{tag}</p>{' '}
        {/* <p id={tag} onClick={removeTag}>
          x
        </p> */}
        {/* <div onClick={removeTag}> */}
        <IoCloseCircle className='close-x' id={tag} onClick={removeTag} />
        {/* </div> */}
      </div>
    );
  });

  // console.log(compList);
  let len = compList.length / 4;
  // console.log(len);
  let companiesList1 = compList.map((coun, index) => {
    // console.log(index);
    if (index < len) {
      // console.log(index);
      return <p>{coun.companyName}</p>;
    }
  });
  let len2 = len * 2;
  let companiesList2 = compList.map((coun, index) => {
    if (index >= len && index < len2) return <p>{coun.companyName}</p>;
  });
  let len3 = len * 3;
  let companiesList3 = compList.map((coun, index) => {
    if (index >= len2 && index < len3) return <p>{coun.companyName}</p>;
  });
  let companiesList4 = compList.map((coun, index) => {
    if (index > len3) return <p>{coun.companyName}</p>;
  });
  // console.log(companiesList1);
  const fileInput = useRef(null);
  const [logo, setLogo] = useState(null);
  const onFileChange = (e) => {
    setLogo(e.target.files[0]);
  };
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
      <div className='website-tree'>
        <p
          className='parent'
          onClick={() => {
            setPage('list');
          }}
        >
          Companies
        </p>
        {page == 'list' ? <p>{' >'} List</p> : <></>}
        {page == 'add' ? <p>{' >'} Add Company</p> : <></>}
        {page == 'company-detail' ? <p>{' >'} Details</p> : <></>}
      </div>
      {page == 'list' ? (
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
              onKeyDown={enterTag}
              onChange={(e) => setInput(e.target.value)}
            />
            <p
              className='add-btn'
              onClick={() => {
                setPage('add');
              }}
            >
              {' '}
              Add Company
            </p>
          </div>
          <div className='tag-list'>{Tags}</div>
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
      ) : page == 'add' ? (
        <>
          <div className='container rel'>
            <IoIosArrowBack
              className='back-icon'
              onClick={() => setPage('list')}
            />
            <p>Add Company</p>
            <div className='a-wrapper page2 companypage'>
              <div className='field'>
                {/* <div className='img'><MdTitle className='t' /></div> */}
                <div className='field-content addcompany'>
                  <p className='title'>Company Name</p>
                  <input
                    type='text'
                    name='companyname'
                    // onChange={handleChange}
                    placeholder='Ex: facebook'
                    // value={title}
                  ></input>
                </div>
              </div>
              <div className='field'>
                {/* <div className='img'><MdTitle className='t' /></div> */}
                <div className='field-content addcompany'>
                  <p className='title'>Company Domain</p>
                  <input
                    type='text'
                    name='companydomain'
                    // onChange={handleChange}
                    placeholder='Ex: Software, Manufacturing...'
                    // value={title}
                  ></input>
                </div>
              </div>
              <div className='field'>
                {/* <div className='img'><MdTitle className='t' /></div> */}
                <div className='field-content addcompany'>
                  <p className='title'>Company Location</p>
                  <input
                    type='text'
                    name='companylocation'
                    // onChange={handleChange}
                    placeholder='Ex: Mumbai'
                    // value={title}
                  ></input>
                </div>
              </div>
              <div className='field'>
                <div className='field-content  addcompany'>
                  <p className='title'>Company Size:</p>
                  <select
                    id='ex'
                    className=''
                    name='host'
                    // onClick={(e) => {
                    //   OnClick4(e);
                    // }}
                    // onChange={handleChange}
                    // onChange={OnClick4}
                    // value={from.month}
                    // onChange={handleInput}
                  >
                    <option value=''>Select...</option>
                    <option value='Zoom'>0-5</option>
                    <option value='Virtual'>5-25</option>
                    <option value='Virtual'>25-100</option>
                    <option value='Virtual'>100-500</option>
                    <option value='Virtual'>500+</option>
                    {/* <option value='May'>May</option> */}
                  </select>
                </div>
              </div>
              <div className='field'>
                {/* <div className='img'><MdTitle className='t' /></div> */}
                <div className='field-content addcompany'>
                  <p className='title'>Company Website</p>
                  <input
                    type='text'
                    name='companywebsite'
                    // onChange={handleChange}
                    placeholder='example.com'
                    // value={title}
                  ></input>
                </div>
              </div>
              <div className='field'>
                {/* <div className='img'>
                        <MdTitle className='t' />
                      </div> */}
                <div className='field-content addcompany'>
                  <p className='title'>Company Description</p>
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
              <div className='field-content addcompany'>
                <p className='title'>Company Logo</p>
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
                  {logo ? (
                    <p>{logo.name}</p>
                  ) : (
                    <>
                      <IoArrowUpCircleSharp className='icn' />
                      <p>Upload photo</p>
                    </>
                  )}
                </div>
              </div>
              <div className='btn'>
                <button>Create Company</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const AdminPage = ({ events, setEvents, history }) => {
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
  let myEventsListUI = events.map((event, index) => {
    return (
      <div
        className='overview-fields'
        onClick={() => {
          eventSelectHandler(index);
        }}
      >
        <p>{event.title}</p>
      </div>
    );
  });
  const eventSelectHandler = (id) => {
    history.push({ pathname: '/eventpreview/' + id });
  };

  return (
    <>
      <EventsModal
        showModal={showEventsModal}
        setShowModal={setShowEventsModal}
        scrollRemove={scrollRemove}
        eventsMain={events}
        setEventsMain={setEvents}
        history={history}
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
            {myEventsListUI}
            {/* <div className='overview-fields'>
              <p>Apple conf</p>
            </div>
            <div className='overview-fields'>
              <p>Facebook conf</p>
            </div>
            <div className='overview-fields'>
              <p>Google conf</p>
            </div> */}
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
            <CompanyPage />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
