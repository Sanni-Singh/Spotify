
import { MdKeyboardArrowDown } from 'react-icons/md';
import IconRenderMd from '../common/IconRenderMd';
import { Link } from 'react-router-dom';

const Accordion = ({ supportData , isLink }) => {
  
  return (
    <div
      className={`flex justify-between px-5 py-2 
      ${supportData.icon ? 'border-b' : ''}
       ${!isLink ? ' cursor-pointer' : ''}
      `}
      id={supportData.id}>
      <div className='flex gap-5'>
        {supportData.icon ? (
          <IconRenderMd
            lib={supportData.lib}
            iconName={supportData.icon}
            iconColor={supportData.iconColor}
          />
        ) : (
          ''
        )}

        {isLink ? (
          <Link to={supportData.name.split(' ').join('-')}>
            <div className=' hover:text-green-500 duration-100'>{supportData.name}</div>
          </Link>
        ) : (
          <div className=' font-bold'>{supportData.name}</div>
        )}
      </div>
      {isLink === false ? <MdKeyboardArrowDown /> : ''}
    </div>
  );
};

export default Accordion
