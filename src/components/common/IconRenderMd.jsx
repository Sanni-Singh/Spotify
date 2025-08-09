import * as MdIcons from 'react-icons/md';
import * as CiIcons from 'react-icons/ci';

const ICON_LIBRARIES = {
  md: MdIcons,
  ci: CiIcons,
};

const IconRender = ({ lib = 'md', iconName, iconColor }) => {
  const library = ICON_LIBRARIES[lib];
  const IconComponent = library?.[iconName];

  if (!IconComponent) return null;

  return <IconComponent className={`${iconColor} font-extrabold  text-xl`} />;
};

export default IconRender;
