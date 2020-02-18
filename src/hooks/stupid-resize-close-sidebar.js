import { useEffect } from 'react';

const useStupidResizeCloseSidebar = (onCloseSidebar) => {
  useEffect(() => {
    const resizeFunction = () => {
      if (window.innerWidth >= 960) {
        onCloseSidebar();
      }
    };

    window.addEventListener('resize', resizeFunction);

    return () => {
      window.removeEventListener('resize', resizeFunction);
    };
  }, [onCloseSidebar]);
};

export default useStupidResizeCloseSidebar;
