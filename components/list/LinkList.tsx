import { Colors } from 'config/colors';
import { Link } from 'config/accomplishments';
import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';

interface LinkListProps {
  accomplishmentLink: Link;
}

function LinkList(props: LinkListProps): React.ReactElement {
  const { accomplishmentLink } = props;

  function renderList(type: string): React.ReactNode {
    const background = Colors[type];
    const link = accomplishmentLink[type];

    return (
      <a
        className='mr-2 flex items-center rounded-sm px-2 py-1 text-xs font-medium text-white'
        href={link}
        style={{ background }}
        target='_blank'
        rel='noopener noreferrer'
      >
        <AiOutlineLink className='mr-1' size={15} />
        {type}
      </a>
    );
  }

  return (
    <div className='flex'>
      {React.Children.toArray(Object.keys(accomplishmentLink).map(renderList))}
    </div>
  );
}

export default LinkList;
