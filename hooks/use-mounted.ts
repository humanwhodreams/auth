import * as React from 'react';

function useMounted() {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return {
    isMounted,
  };
}

export { useMounted };
