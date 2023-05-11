import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement("#root");


const AddNewMovie = ({handleAdd}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  
  //create a new state for the new movie that we will add
  const [form, setForm] = useState({
    title:"",
    image:"",
    date:"",
    rate: 0,
  });

  //creating the function handle change to change inputs in fields in the form and then give him as a props to every input in the form
  const handleChange = (e) => (setForm({...form, [e.target.name]:e.target.value}))
  const handleRating = (numRate)=> setForm({...form, rate: numRate});
  return (
    <div>
      <button className="btn-open-modal-form" onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
       <form className="form-form"
          onSubmit={(e)=>{
            e.preventDefault();
            let NewMovie={ ...form, id: Math.random(),};
            handleAdd(NewMovie);
            closeModal(); 
          }}
       > 
          <label className="label-form">Movie Title :</label>
          <br />
          <input className="input-form" type="text" value={form.title} name="title" onChange={handleChange} required/>
          <br />
          <label className="label-form">Image :</label>
          <br />
          <input className="input-form"  type="url" value={form.image} name="image" onChange={handleChange} required/>
          <br />
          <label className="label-form">Date :</label>
          <br />
          <input className="input-date-form"  type="date" value={form.date} name="date" onChange={handleChange} required/>
          
          <StarRating rate={form.rate} handleRating={handleRating} />
          <div>
          <button className="btn-modal-form" type="submit" >Add</button>
          <button className="btn-modal-form" onClick={closeModal}>Cancel</button>
        </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddNewMovie