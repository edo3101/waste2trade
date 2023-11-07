import { Footer } from '../components';
import DatePickerTukar from '../components/DatePickerTukar';
import KedaiProfilePoint from '../components/KedaiProfilePoint';
import TukarSampah from '../components/TukarSampah';

export default function UserPage() {
    return (
      <>
        <KedaiProfilePoint />
        <DatePickerTukar />
        <TukarSampah />
        <Footer />
      </>
    );
  }
  

