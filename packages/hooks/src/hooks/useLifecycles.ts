import { useEffect } from 'react';

const useLifecycles = (mount: { (): void; (): void }, unmount?: { (): void; (): void }) => {
  useEffect(() => {
    if (mount) {
      mount();
    }
    return () => {
      if (unmount) {
        unmount();
      }
    };
  }, []);
};

export default useLifecycles;
