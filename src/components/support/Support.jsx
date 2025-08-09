// import { useState } from "react"
import { SPOTIFY_SUPPORT_DATA } from './utils';
import SupportAccordions from './SupportAccordions';
import { useState } from 'react';

const Support = () => {
   const [clickedId, setClickedId] = useState('');

  return (
    <div className='dark:text-white '>
      <div className='w-150 bg-slate-500 mx-auto pb-2 '>
        {SPOTIFY_SUPPORT_DATA.map((supportData) => (
          <SupportAccordions
            key={supportData.id}
            supportData={supportData}
            clickedId={clickedId}
            setClickedId={setClickedId}
          />
        ))}
      </div>
    </div>
  );
};

export default Support;
