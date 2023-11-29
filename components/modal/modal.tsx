import React, { useEffect, useRef } from 'react';
import { Container, Header, Body, Footer } from './modal.skeleton';
// import Button from '../button/button';
// import { GlobalStyles } from '@/src/constants';

export type ModaLProps = {
  /**
   * Show or hide modal flag
   */
  show?: boolean;
  /**
   * Modal title
   */
  title?: React.ReactNode;
  /**
   * Modal color variations
   */
  color?: 'primary' | 'secondary';
  /**
   * Custon Modal Header
   */
  renderHeader?: React.ReactNode;
  /**
   * Custon Modal Footer
   */
  renderFooter?: React.ReactNode;
  /**
   * Modal content
   */
  children: React.ReactNode;
  /**
   * handler close
   */
  onClose: () => void;
};

/**
 * Modal UI component for user interaction
 */
const Modal = ({
  show = false,
  title = '',
  renderHeader,
  children,
  renderFooter,
  color = 'primary',
  onClose,
}: ModaLProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      console.log('enter');
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [show]);

  const header = renderHeader ? (
    renderHeader
  ) : title ? (
    <Header>
      <h1>{title}</h1>
    </Header>
  ) : (
    <></>
  );

  const footer = renderFooter ? (
    renderFooter
  ) : (
    <Footer className="flex justify-center">
      <button
        className="p-2 bg-neutral-500 px-5 rounded-lg text-white"
        onClick={onClose}
      >
        Close
      </button>
    </Footer>
  );

  return show ? (
    <Container ref={ref} className="bg-neutral-500 rounded-md">
      {header}
      <Body className="">{children}</Body>
      {footer}
    </Container>
  ) : (
    <></>
  );
};

export default Modal;
