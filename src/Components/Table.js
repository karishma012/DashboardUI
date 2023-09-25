import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Table() {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items to display per page

    const getData = () => {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
            });
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        const searchText = e.target.value.toLowerCase();
        setSearchText(searchText);

        // Filter the data based on the search text
        const filteredResults = data.filter((row) => {
            return Object.values(row).some((value) =>
                value.toLowerCase().includes(searchText)
            );
        });

        setData(filteredResults);
    };

    useEffect(() => {
        getData();
    }, []);

    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Slice the data based on the current page and items per page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    // Event handler for changing the current page
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="table-container w-5/6 mx-auto p-4 bg-white rounded-full rounded-t-lg rounded-b-lg">
        <table className="w-full">
            <thead>
            <th className="py-2 pr-8 font-bold text-[#16C098]">
                        <span className="ml-2">Active Members</span>
                       
                    </th>
                <tr className="w-full text-gray-400 border-b border-gray-300">
                    <th className=" py-2 pr-8">Customer Name</th>
                    <th className=" py-2 pr-8">Company</th>
                    <th className=" py-2 pr-8">Phone Number</th>
                    <th className=" py-2 pr-8">Email</th>
                    <th className=" py-2 pr-8">Country</th>
                    <th className=" py-2 pr-8">Status</th>
                </tr>
            </thead>
            <tbody>
                {/* Render rows for the current page */}
                {currentData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-300">
                        <td className="py-2 pl-8">{row.customerName}</td>
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
                ))}
                    {/* Pagination */}
                    <tr className="">
                        <td colSpan="6">
                            <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
                                <div className="flex flex-1 justify-between sm:hidden">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        Next
                                    </button>
                                </div>
                                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing
                                            <span className="font-medium">{startIndex + 1}</span>
                                            to
                                            <span className="font-medium">{endIndex}</span>
                                            of
                                            <span className="font-medium">{data.length}</span>
                                            results
                                        </p>
                                    </div>
                                    <nav
                                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                        aria-label="Pagination"
                                    >
                                        <button
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                                        </button>
                                        {/* Pagination Links */}
                                        {Array.from({ length: totalPages }).map((_, page) => (
                                            <button
                                                key={page}
                                                onClick={() => handlePageChange(page + 1)}
                                                className={`relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${currentPage === page + 1 ? 'bg-indigo-600' : 'bg-white hover:bg-gray-50'}`}
                                            >
                                                {page + 1}
                                            </button>
                                        ))}
                                        <button
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                            className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray=-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
