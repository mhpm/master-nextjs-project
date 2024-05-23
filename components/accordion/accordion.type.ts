export interface AccordionItem {
  title: string;
  content: React.ReactNode;
  open?: boolean; // Optional prop for initial open state
}

export interface AccordionProps {
  children: React.ReactNode;
  allowMultiple?: boolean; // Optional prop to allow multiple open items
}
