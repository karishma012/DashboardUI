import React from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Table from './Components/Table';
import LineCharts from './Components/LineCharts';
import Donut from './Components/Charts';

function App() {
  return (
    <div className="bg-gray-200"> 
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 flex flex-grow">
            <Donut />
            <LineCharts />
          </div>
          <Table />
        </div>

      </div>
    </div>
  );
}

export default App;
