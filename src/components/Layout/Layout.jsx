import { useState } from 'react';
import { Footer, Header, SideNav } from '..';
import { useTransitionUnMount } from '../../hooks/useTransitionUnmount';

export const Layout = ({ toggleTheme, children }) => {
  const [trigger, setTrigger] = useState(null);
  const {
    isMounted,
    isHidden,
    showComponent,
    hideComponent,
    handleTransitionEnd,
  } = useTransitionUnMount();

  const openNav = (triggerElement) => {
    showComponent();
    setTrigger(triggerElement);
  };

  const closeNav = () => {
    hideComponent();

    // for accessibility when using the keyboard to navigate
    // add focus to the element to triggered the open nav function
    trigger?.focus();
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} openNav={openNav} />

      <SideNav
        isMounted={isMounted}
        closeNav={closeNav}
        isHidden={isHidden}
        handleTransitionEnd={handleTransitionEnd}
      />

      <main>{children}</main>

      <Footer />
    </>
  );
};
