import { useEffect } from 'react';
import { fetchMitra } from '../lib/fetchMitra';
import { Footer, WasteOpt, RewardOpt, KedaiOpt } from '../components';

export default function UserPage() {
  useEffect(()=>{
    fetchMitra()
  },[])
    return (
      <>
        <WasteOpt />
        <RewardOpt />
        <KedaiOpt />
        <Footer />
      </>
    );
  }
