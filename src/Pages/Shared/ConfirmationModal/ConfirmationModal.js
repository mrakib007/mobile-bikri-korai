import React from 'react';

const ConfirmationModal = ({title,message,successButtonName,closeModal,modalData,successAction}) => {
    return (
<div>
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className='font-bold text-lg'>{title}</h3>
    <p className='py-4'>{message}</p>
    <div className="modal-action">
        <label htmlFor="confirmation-modal"
        onClick={()=>successAction(modalData)}
        className='btn'>{successButtonName}</label>
        <button onClick={closeModal} className='btn btn-outline'>Close Modal</button>
    </div>
  </div>
</div>
</div>
    );
};

export default ConfirmationModal;