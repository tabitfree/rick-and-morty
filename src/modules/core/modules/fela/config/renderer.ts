import { createRenderer } from 'fela';

import plugins from './plugins';

export const configureRenderer = () =>
    createRenderer({
        devMode: process.env.REACT_APP_IS_DEV_SERVER === 'true',
        plugins,
    });
