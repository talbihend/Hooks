import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';




const EditMovie = ({ card, handleEdit}) => {
    const [title, setTitle] = useState(card.title)
    const [image, setImage] = useState(card.image)
    const [date, setDate] = useState(card.date)
    const [rate, setRate] = useState(card.rate)
    const handleRating=(x)=>setRate(x)
    const handleSubmit=(e)=>{
      e.preventDefault()
      const film={id:card.id,title,date,image,rate}
      handleEdit(film)
      closeModal()
    }

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

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  
  //create a new state for the new movie that we will add
  //const [form, setForm] = useState({title:"", image:"",date:"",rate: 0,});

  //creating the function handle change to change inputs in fields in the form and then give him as a props to every input in the form
  //const handleChange = (e) => (setForm({...form, [e.target.name]:e.target.value}))
  return (
    <div>
      <button className="buttDelMod" onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
       <form className="form-form"
          onSubmit={handleSubmit}
          
            //(e)=>{
            //e.preventDefault();
            //let EditMovie={ ...form, id: Math.random(),};
            //handleAdd(EditMovie);
            //closeModal(); 
           
       > 
          <label className="label-form">Movie Title :</label>
          <br />
          <input className="input-form" type="text" value={title} name="title" onChange={e=>setTitle(e.target.value)} required/>
          <br />
          <label className="label-form">Image :</label>
          <br />
          <input className="input-form"  type="url" value={image} name="image" onChange={e=>setImage(e.target.value)} required/>
          <br />
          <label className="label-form">Date :</label>
          <br />
          <input className="input-date-form"  type="date" value={date} name="date" onChange={e=>setDate(e.target.value)}required/>
          
          <StarRating rate={rate} handleRating={handleRating} />
          <div>
          <button className="btn-modal-form" type="submit" >Add</button>
          <button className="btn-modal-form" onClick={closeModal}>Cancel</button>
        </div>
        </form>
      </Modal>

    </div>
  )
}

export default EditMovie