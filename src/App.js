import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react'

import ReactToPrint from 'react-to-print';
function App() {
  const [data, setData] = useState({
    'title': "",
    'imageLink': '',
    "message": ""
  }
  )
  const componentRef = useRef();
  const [gereate, setGenerate] = useState(false);
  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const clear = () => {
    setData({
      'title': "",
      'imageLink': '',
      "message": ""
    });
    setGenerate(false)
  }
  return (
    <div >

      <h1>To generate the PDF</h1>
      <div className="container ">
        <input className="form-control my-2 " name='title' value={data.title} id='title' onChange={onchange} placeholder="enter the title"></input>
        <input className="form-control  my-2" name='imageLink' id='imageLink' value={data.imageLink} onChange={onchange} placeholder="enter the image link"></input>
        <textarea className="form-control my-2" name='message' id='message' value={data.message} onChange={onchange} placeholder='enter the message'></textarea>
        <button type="" className="btn btn-outline-success my-2 form-control" onClick={() => { setGenerate(true) }}>Generate PDF</button>
        <button type="" className="btn btn-outline-danger my-2 form-control" onClick={clear}  >clear</button>


      </div>
      {gereate === true ?
        <div >
          <div class="alert container my-2 alert-success alert-dismissible fade show" role="alert">
            <strong>Wow!</strong> Now You can create the pdf of the page
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <div className='my-5 container my-5' ref={componentRef}>
            <h1>{data.title}</h1>
            <img src={data.imageLink} width={500}></img>
            <p className='text-break'>{data.message}</p>
          </div>


          <ReactToPrint
            trigger={() => <button className='btn btn-outline-primary my-2'>Print this out!</button>}
            content={() => componentRef.current}
          />
        </div>
        : ''
      }
    </div>
  );
}

export default App;
