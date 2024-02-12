import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
  open?: boolean; // Optional prop for initial open state
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean; // Optional prop to allow multiple open items
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [activeItems, setActiveItems] = useState<number[]>([]);

  const handleClick = (index: number) => {
    if (allowMultiple) {
      const updatedItems = [...activeItems];
      if (updatedItems.includes(index)) {
        updatedItems.splice(updatedItems.indexOf(index), 1);
      } else {
        updatedItems.push(index);
      }
      setActiveItems(updatedItems);
    } else {
      setActiveItems([index]);
    }
    console.log(activeItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          className="p-3 cursor-pointer bg-gray-700 rounded-lg mb-1 text-white w-[500px] transition ease-in-out"
        >
          <div className="flex justify-between items-center">
            <button
              className="w-full text-left"
              onClick={() => handleClick(index)}
              aria-expanded={activeItems.includes(index)}
            >
              {item.title}
            </button>
            <span>
              {activeItems.includes(index) ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowBack />
              )}
            </span>
          </div>
          {activeItems.includes(index) && <Content>{item.content}</Content>}
        </li>
      ))}
    </ul>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-2 transition ease-in-out">{children}</div>;
};

export default Accordion;
