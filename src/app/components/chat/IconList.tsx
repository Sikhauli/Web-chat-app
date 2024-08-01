import React, {useState} from 'react';
import Link from 'next/link';

interface IconItem {
    id: number;
    svg: JSX.Element;
    component: JSX.Element;
    additionalClasses?: string;
  }

  type IconListProps = {
    items: IconItem[];
    onSelectComponent: (id: number, component: JSX.Element | null) => void;
    selectedIconId: number | null;
  };


const IconList = ({ items, onSelectComponent, selectedIconId }: IconListProps ) => {
  
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <div
          key={item.id}
          className={`py-4 hover:text-gray-700 ${selectedIconId === item.id ? item.additionalClasses : ''}`}
          onClick={() => onSelectComponent(item.id, item.component)}
        >
          {item.svg}
        </div>
      ))}
    </div>
  );
};

export default IconList;
