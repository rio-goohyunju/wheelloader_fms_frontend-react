import { useState } from 'react';

import { GridValidRowModel } from '@mui/x-data-grid';
import constate from 'constate';

interface PromiseArgumentsState {
  newRow: GridValidRowModel;
  oldRow: GridValidRowModel;
}

const useAddressData = () => {
  const [promiseArguments, setPromiseArguments] =
    useState<PromiseArgumentsState>({
      newRow: {},
      oldRow: {},
    });

  return {
    promiseArguments,
    setPromiseArguments,
  };
};

export const [AddressProvider, useAddressContext] = constate(useAddressData);
