import { useEffect } from "react";

export default function useHandleResize(fun: Function) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        fun(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [fun]);
}
