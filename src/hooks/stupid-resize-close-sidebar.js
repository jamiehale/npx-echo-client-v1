import { useEffect } from 'react';

const useStupidResizeCloseSidebar = (onCloseSidebar) => {
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      onCloseSidebar();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeFunction);

    return () => {
      window.removeEventListener('resize', resizeFunction);
    };
  }, []);
};

export default useStupidResizeCloseSidebar;
