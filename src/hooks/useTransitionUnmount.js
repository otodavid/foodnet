import { useEffect, useState } from 'react';

// use hook to handle transition event for unmounting components
export function useTransitionUnMount() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (isMounted) {
      setIsHidden(false);
    }
  }, [isMounted]);

  const showComponent = () => {
    if (!isMounted) {
      setIsMounted(true);
    }
  };

  const hideComponent = () => {
    if (isMounted) {
      setIsHidden(true);
    }
  };

  const handleTransitionEnd = () => {
    if (isHidden) {
      setIsMounted(false);
    }
  };

  return {
    isMounted,
    isHidden,
    showComponent,
    hideComponent,
    handleTransitionEnd,
  };
}
