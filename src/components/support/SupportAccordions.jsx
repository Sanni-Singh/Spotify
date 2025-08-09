
import Accordion from './Accordion';
import {  useState } from 'react';

const SupportAccordions = ({ supportData, clickedId, setClickedId }) => {
  const [childClicked, setChildClicked] = useState('');
  const handleClick = (e) => {
    e.stopPropagation();
    let id = supportData.id;
    if (supportData.id == clickedId) {
      setChildClicked('');
      id = ''
    } 
    setClickedId(id);
  }


  return (
    <div
      onClick={(e) => handleClick(e)}
      className=''>
      <Accordion
        supportData={supportData}
        isLink={supportData.children.length === 0}
      />
      <div className='pl-2'>
        {clickedId === supportData.id && supportData.children.length
          ? supportData.children.map((data) => (
              <SupportAccordions
                key={data.id}
                supportData={data}
                clickedId={childClicked}
                setClickedId={setChildClicked}
              />
            ))
          : ''}
      </div>
    </div>
  );
};

export default SupportAccordions;
