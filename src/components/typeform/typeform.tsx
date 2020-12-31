import React, { useEffect, useRef } from 'react';

import * as typeformEmbed from '@typeform/embed';

export const Typeform = ({ url }: {url: string}) => {
  const typeformRef = useRef(null);

  useEffect(() => {
    typeformEmbed.makeWidget(typeformRef.current, url, {
      hideFooter: true,
      hideHeaders: true,
      opacity: 50,
    });
  }, [typeformRef, url]);

  return <div ref={typeformRef} style={{ height: '50vh', width: '100%' }} />;
};
