import React, { useState } from 'react';

import { AuxProps, ContextProps } from '@types';

export const myContext = React.createContext<Partial<ContextProps>>({});

const Provider = ({ children }: AuxProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <myContext.Provider
      value={{
        modalVisible,
        closeModal: () => setModalVisible(false),
        showModal: () => setModalVisible(true),
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default ({ element }: { element: React.ReactChildren }): JSX.Element => {
  return <Provider>{element}</Provider>;
};
