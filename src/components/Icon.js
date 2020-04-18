import {FaPen, FaRegCircle, FaTimes} from 'react-icons/fa';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Icon = ({name}) => {
  switch(name) {
    case 'circle':
      return <FaRegCircle className="icons" />
    case 'cross':
      return <FaTimes className="icons" />
    default:
      return <FaPen className="icons" />
  }
}

export default Icon;