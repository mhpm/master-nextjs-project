import { IoIosArrowDown } from 'react-icons/io';
import { AccordionProps, AccordionItem } from './accordion.type';

const Accordion = ({ children, allowMultiple = false }: AccordionProps) => {
  return <div className="w-full sm:max-w-[500px]">{children}</div>;
};

Accordion.Item = function Item({ title, content, open }: AccordionItem) {
  return (
    <div
      className={`mb-2 bg-gray-700 text-white rounded-md transition-all duration-1000 ease-in-out ?`}
    >
      <h2 className="block">
        <button className="w-full" aria-expanded={open}>
          <div className="p-3 cursor-pointer flex justify-between items-center w-full">
            {title}
            <span className={`transition ease-in-out ${!open && 'rotate-90'}`}>
              <IoIosArrowDown />
            </span>
          </div>
        </button>
      </h2>
      {open && (
        <section className="bg-gray-700 rounded-b-md px-3 pb-3 text-left w-full">
          {content}
        </section>
      )}
    </div>
  );
};

export default Accordion;
