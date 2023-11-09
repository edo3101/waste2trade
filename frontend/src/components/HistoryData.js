import Container from './Container';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

export default function HistoryData() {
  return (
    <section>
      <Container>
        <h2 className="text-3xl font-bold text-center tracking-tighter text-custom-tertiary my-8 lg:mt-16">
          History Data
        </h2>
        <div className="relative mb-5">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-accent rounded-full relative w-full lg:w-1/4 text-custom-tertiary"
          />
          <Link to="#">
            <FiSearch className="absolute text-2xl -translate-y-9 translate-x-80 lg:translate-x-72 text-custom-tertiary" />
          </Link>
        </div>
        <div className="overflow-x-auto my-5 lg:my-10">
          <table className="table table-md table-pin-rows table-pin-cols text-custom-tertiary">
            <thead className="text-base text-custom-tertiary font-semibold">
              <tr>
                <th></th>
                <td>Nama</td>
                <td>No Telpon</td>
                <td>Jenis</td>
                <td>Berat</td>
                <td>Tanggal</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Canada</td>
                <td>12/16/2020</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td>United States</td>
                <td>12/5/2020</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>China</td>
                <td>8/15/2020</td>
              </tr>
              <tr>
                <th>4</th>
                <td>Marjy Ferencz</td>
                <td>Office Assistant I</td>
                <td>Crimson</td>
                <td>Russia</td>
                <td>3/25/2021</td>
              </tr>
              <tr>
                <th>5</th>
                <td>Yancy Tear</td>
                <td>Community Outreach Specialist</td>
                <td>Indigo</td>
                <td>Brazil</td>
                <td>5/22/2020</td>
              </tr>
              <tr>
                <th>6</th>
                <td>Irma Vasilik</td>
                <td>Editor</td>
                <td>Purple</td>
                <td>Venezuela</td>
                <td>12/8/2020</td>
              </tr>
              <tr>
                <th>7</th>
                <td>Meghann Durtnal</td>
                <td>Staff Accountant IV</td>
                <td>Yellow</td>
                <td>Philippines</td>
                <td>2/17/2021</td>
              </tr>
              <tr>
                <th>8</th>
                <td>Sammy Seston</td>
                <td>Accountant I</td>
                <td>Crimson</td>
                <td>Indonesia</td>
                <td>5/23/2020</td>
              </tr>
              <tr>
                <th>9</th>
                <td>Lesya Tinham</td>
                <td>Safety Technician IV</td>
                <td>Maroon</td>
                <td>Philippines</td>
                <td>2/21/2021</td>
              </tr>
              <tr>
                <th>10</th>
                <td>Zaneta Tewkesbury</td>
                <td>VP Marketing</td>
                <td>Green</td>
                <td>Chad</td>
                <td>6/23/2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
