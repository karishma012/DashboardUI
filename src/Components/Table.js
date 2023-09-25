import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Table() {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(null);

    // Your table data (you can replace this with your actual data)
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

    // Handle search input change
    const handleSearchChange = (e) => {
        const searchText = e.target.value.toLowerCase();
        setSearchText(searchText);

        // Filter the data based on the search text
        const filteredResults = tableData.filter((row) => {
            return Object.values(row).some((value) =>
                value.toLowerCase().includes(searchText)
            );
        });

        setFilteredData(filteredResults);
    };

    return (
        <div className="table-container w-5/6 mx-auto p-4 bg-white rounded-full rounded-t-lg rounded-b-lg">
            <table className="w-full">
                <tbody>
                    <tr className="">
                        <td colSpan="6" className="text-right">

                            <input

                                type="text"
                                placeholder=" &#128269; Search"
                                className="px-2 py-1 border border-gray-300 rounded mr-2"
                                value={searchText}
                                onChange={handleSearchChange}
                            />

                            <button className="bg-gray-100 px-4 py-2 rounded mr-2 hover:rounded">
                                Sort By: <span className="font-semibold">Newest</span>
                                <FontAwesomeIcon icon={faCaretDown} className='mx-2' />
                            </button>
                        </td>
                    </tr>
                    <tr className="">
                        <td colSpan="6" className="text-[#16C098] font-bold">
                            Active Members
                        </td>
                    </tr>
                    <tr className="w-full text-gray-400 border-b border-gray-300">
                        <th className="w-1/6 py-2">Customer Name</th>
                        <th className="w-1/6 py-2">Company</th>
                        <th className="w-1/6 py-2">Phone Number</th>
                        <th className="w-1/6 py-2">Email</th>
                        <th className="w-1/6 py-2">Country</th>
                        <th className="w-1/6 py-2">Status</th>
                    </tr>
                    {filteredData
                        ? filteredData.map((row, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="py-2">{row.customerName}</td>
                                <td className="py-2">{row.company}</td>
                                <td className="py-2">{row.phoneNumber}</td>
                                <td className="py-2">{row.email}</td>
                                <td className="py-2">{row.country}</td>
                                <td className="py-2">
                                    {row.status === 'Active' ? (
                                        <button className="w-20 bg-green-100 text-[#00B087]  border-solid border-2 border-[#00B087] px-2 py-1 rounded">
                                            {row.status}
                                        </button>
                                    ) : (
                                        <button className="w-20 bg-red-100 text-[#DF0404] border-solid border-2 border-[#DF0404] px-2 py-1 rounded">
                                            {row.status}
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))
                        : tableData.map((row, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="py-2">{row.customerName}</td>
                                <td className="py-2">{row.company}</td>
                                <td className="py-2">{row.phoneNumber}</td>
                                <td className="py-2">{row.email}</td>
                                <td className="py-2">{row.country}</td>
                                <td className="py-2">
                                    {row.status === 'Active' ? (
                                        <button className="w-20 bg-[#16C09861] font-semibold text-[#00B087] border-solid border-2 border-[#00B087] px-2 py-1 rounded ">
                                            {row.status}
                                        </button>
                                    ) : (
                                        <button className="w-20 bg-red-100 font-semibold text-[#DF0404] border-solid border-2 border-[#DF0404] px-2 py-1 rounded">
                                            {row.status}
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    <tr className="">
                        <td colSpan="6">
                            <div className="flex items-center justify-between border-t border-gray-200  px-4 py-3 sm:px-6">
                                <div className="flex flex-1 justify-between sm:hidden">
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Previous
                                    </a>
                                    <a
                                        href="#"
                                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Next
                                    </a>
                                </div>
                                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing
                                            <span className="font-medium">1</span>
                                            data
                                            <span className="font-medium">10</span>
                                            of
                                            <span className="font-medium">97</span>
                                            results
                                        </p>
                                    </div>
                                    <div>
                                        <nav
                                            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                            aria-label="Pagination"
                                        >
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                <span className="sr-only">Previous</span>
                                                <svg
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                            {/* Pagination Links */}
                                            <a
                                                href="#"
                                                aria-current="page"
                                                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                1
                                            </a>
                                            <a
                                                href="#"
                                                className="relative inline-flex items
                        -center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                2
                                            </a>
                                            <a
                                                href="#"
                                                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                            >
                                                3
                                            </a>
                                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                                ...
                                            </span>
                                            <a
                                                href="#"
                                                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                            >
                                                8
                                            </a>
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                9
                                            </a>
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                10
                                            </a>
                                            {/* Pagination Links */}
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                <span className="sr-only">Next</span>
                                                <svg
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10l3.93 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    {/* Pagination Row */}
                    {/* ... Pagination code (not updated) */}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
