import React from 'react'
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { CiShoppingTag } from "react-icons/ci";


const AlertBox = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className=''>
      <button onClick={() => setOpenModal(true)} className="btn btn-sm btn-danger px-4" size='sm'>Buy</button>
      <Modal show={openModal} size="sm" onClose={() => setOpenModal(false)} popup className=' py-48' >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <CiShoppingTag className="mx-auto mb-4 h-14 w-14 text-red-500 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-600 dark:text-gray-400">
             Are you sure to Confirm Purchase?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>


      
    </div>
  )
}

export default AlertBox