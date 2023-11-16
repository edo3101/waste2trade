import { useState } from 'react';
import { TukarSampah, Footer } from '../components';
import useAxios from '../hooks/useAxios';

export default function TukarSampahMitra() {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    trashWeight: 0,
    trashType: '',
  });

  const { axiosInstance } = useAxios();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTrashSubmit = async (e) => {
    e.preventDefault();

    const body = {
      username: formData.username.trim(),
      phoneNumber: formData.phoneNumber,
      trashWeight: formData.trashWeight,
      trashType: formData.trashType,
    };

    try {
      const response = await axiosInstance.post('/partner/submitTrash', body);

      if (response.status === 200) {
        window.location.assign('/mitra/giftcode');
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TukarSampah
        formData={formData}
        handleTrashSubmit={handleTrashSubmit}
        handleInputChange={handleInputChange}
      />
      <Footer />
    </>
  );
}
