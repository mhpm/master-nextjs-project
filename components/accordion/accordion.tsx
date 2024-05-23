import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

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
  const [activeItems, setActiveItems] = useState<AccordionItem[]>(items);

  const handleClick = (item: AccordionItem) => {
    const updatedItems = activeItems.map((el) =>
      el.title === item.title
        ? { ...el, open: !item.open }
        : allowMultiple
        ? el
        : { ...el, open: false }
    );

    setActiveItems(updatedItems);
  };

  return (
    <div className="w-full sm:max-w-[500px]">
      {activeItems.map((item, index) => (
        <div
          key={index}
          className={`mb-2 bg-gray-700 text-white rounded-md transition-all duration-1000 ease-in-out ?`}
        >
          <h2 className="block">
            <button
              className="w-full"
              onClick={() => handleClick(item)}
              aria-expanded={item.open}
            >
              <div className="p-3 cursor-pointer flex justify-between items-center w-full">
                {item.title}
                <span
                  className={`transition ease-in-out ${
                    !item.open && 'rotate-90'
                  }`}
                >
                  <IoIosArrowDown />
                </span>
              </div>
            </button>
          </h2>
          {item.open && <Content>{item.content}</Content>}
        </div>
      ))}
    </div>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-gray-700 rounded-b-md px-3 pb-3 text-left w-full">
      {children}
    </section>
  );
};

export default Accordion;
