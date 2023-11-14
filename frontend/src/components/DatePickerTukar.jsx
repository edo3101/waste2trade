import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const DatePickerTukar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="">
        <label className="block mt-5 mb-2 text-sm font-medium  text-custom-secondary">
          Pilih tanggal
        </label>

        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          className="w-full py-3 pl-4 pr-10 font-medium leading-none border-2 rounded-lg shadow-sm border-custom-secondary focus:outline-none focus:shadow-outline text-custom-tertiary"
          placeholderText="Select date"
        />
      </div>
 
  );
};

export default DatePickerTukar;
