import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const DatePickerTukar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="">
        <label className=" block mt-5 mb-2 text-sm font-medium text-custom-secondary">
          Pilih tanggal
        </label>

        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          className="border-2 border-custom-secondary w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-custom-tertiary font-medium"
          placeholderText="Select date"
        />
      </div>
 
  );
};

export default DatePickerTukar;
