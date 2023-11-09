import { useEffect } from 'react';
import { fetchMitra } from '../lib/fetchMitra';
import { KedaiProfile, RewardExc, Footer} from '../components';

export default function KedaiUserPage() {
  useEffect(()=>{
    fetchMitra()
  },[])
  return (
    <>
      <KedaiProfile />
      <RewardExc />
      <Footer />
    </>
  );
}