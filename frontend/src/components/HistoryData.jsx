import { useEffect, useState } from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function HistoryData() {
  const [trashSubmitHistory, setTrashSubmitHistory] = useState([]);
  const GRAMS_TO_KG = 0.001;

  const fetchData = async () => {
    try {
      const authToken = Cookies.get('auth_token');
      const trashSubmitHistoryResponse = await axios.get('http://localhost:3000/partner/trashSubmitHistory', {
        headers: {
          Authorization: 'Bearer ' + authToken,
        },
      });

      setTrashSubmitHistory(trashSubmitHistoryResponse.data.trashSubmitHistory);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <Container>
        <h2 className="my-8 text-3xl font-bold tracking-tighter text-center text-custom-tertiary lg:mt-16">
          History Data
        </h2>
        <div className="relative mb-5">
          <input
            type="text"
            placeholder="Search"
            className="relative w-full rounded-full input input-bordered input-accent lg:w-1/4 text-custom-tertiary"
          />
          <Link to="#">
            <FiSearch className="absolute text-2xl -translate-y-9 translate-x-80 lg:translate-x-72 text-custom-tertiary" />
          </Link>
        </div>
        <div className="my-5 overflow-x-auto lg:my-10">
          <table className="table table-md table-pin-rows table-pin-cols text-custom-tertiary">
            <thead className="text-base font-semibold text-custom-tertiary">
              <tr>
                <th></th>
                <td>Username</td>
                <td>No Telpon</td>
                <td>Jenis</td>
                <td>Berat</td>
                <td>Tanggal</td>
              </tr>
            </thead>
            <tbody>
              {trashSubmitHistory.map((history, index) => (
                <tr key={history._id}>
                  <th>{index + 1}</th>
                  <td>{history.username}</td>
                  <td>{history.phoneNumber}</td>
                  <td>{history.trashType}</td>
                  <td>{history.trashWeight * GRAMS_TO_KG} kg</td>
                  <td>{new Date(history.submissionDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
