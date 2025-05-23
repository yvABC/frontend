import React, { useState } from 'react';
import { differenceInDays, format } from 'date-fns';

const Calendar = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dayDifference, setDayDifference] = useState(null);

  const calculateDays = () => {
    if (startDate && endDate) {
      const diff = differenceInDays(new Date(endDate), new Date(startDate));
      setDayDifference(diff);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-300 to-gray-900 flex flex-col items-center justify-center p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Calculate Number of Days</h2>
        
        <div className="mb-4">
          <label className="block mb-1">Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-1">End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
          />
        </div>

        <button
          onClick={calculateDays}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded mt-2"
        >
          Submit
        </button>

        {dayDifference !== null && (
          <p className="mt-4 text-center text-lg">
            Difference between the two dates is <span className="font-bold text-green-400">{dayDifference}</span> day{dayDifference !== 1 ? 's' : ''}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Calendar;
