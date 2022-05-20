import { mutate } from '@gcto/swrv-hooks';
import { getNear } from './services';

export const nearInit = (params: {}) => {
  void mutate("", getNear());
};
