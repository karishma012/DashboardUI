import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="h-100% w-1/5 bg-white text-black rounded-3xl">
      <div className="p-4">
        <div className="text-4xl font-bold">ZAG</div>
      </div>
      <ul className="py-4">
      <li className="py-2 pl-4 border-l-4 border-transparent hover:border-blue-400">
  <div className="flex items-center">
    <FontAwesomeIcon icon={faArrowTrendUp} className="text-black text-2xl" />
    <a href="#" className="ml-2">
      Reports
    </a>
  </div>
</li>


<li className="py-2 pl-4 border-l-4 border-transparent hover:border-blue-400">
  <a href="#">
    <button className="w-40 bg-[#1B59F81A] px-2 py-1 rounded-lg font-semibold text-blue-600 flex items-center space-x-2">
      <FontAwesomeIcon icon={faTableCells} className="text-blue-600 text-2xl" />
      <span>Workspaces</span>
    </button>
  </a>
</li>


<li className="py-2 pl-4 border-l-4 border-transparent hover:border-blue-400">
  <a href="#">
    <div className="flex items-center">
      <FontAwesomeIcon icon={faGear} className="text-black text-xl" />
      <span className="ml-2">Settings</span>
    </div>
  </a>
</li>

      </ul>
    </div>
  );
}

export default Sidebar;
