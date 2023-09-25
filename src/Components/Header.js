import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <div className="bg-gray-200 p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Orders</div>
        <button className="bg-blue-900 text-white py-2 px-4 rounded-lg font-semibold ">
        <FontAwesomeIcon icon={faPlus} className='text-xl' /> Add Order
        </button>
      </div>
      <hr className="mt-4 border-t border-gray-400" />
    </div>
  );
}

export default Header;



const tableData = [
    {
      customerName: 'Jane Cooper',
      company: 'Microsoft',
      phoneNumber: '(225) 555-0118',
      email: 'jane@microsoft.com',
      country: 'United States',
      status: 'Active',
    },
    {
      customerName: 'Floyd Miles',
      company: 'Yahoo',
      phoneNumber: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      country: 'Kiribati',
      status: 'Inactive',
    },
    {
      customerName: 'Ronald Richards',
      company: 'Adobe',
      phoneNumber: '(302) 555-0107',
      email: 'ronald@adobe.com',
      country: 'Israel',
      status: 'Inactive',
    },
    {
      customerName: 'Marvin McKinney',
      company: 'Tesla',
      phoneNumber: '(252) 555-0126',
      email: 'marvin@tesla.com',
      country: 'Iran',
      status: 'Active',
    },
  ];
