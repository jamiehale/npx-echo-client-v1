import { useEffect } from 'react';
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

let ps;

const usePerfectScrollbar = (ref) => {
  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(ref.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }

    return () => {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  }, [ref]);
};

export default usePerfectScrollbar;
