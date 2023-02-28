import React from 'react';
import type { ReactNode } from 'react';
import { setupIonicReact } from '@ionic/react';

import { ReactQuery } from 'modules/api';

import { Fela, configureRenderer } from '../../modules/fela';
import { Jotai } from '../Jotai';

setupIonicReact({ mode: 'ios' });

export interface CoreProps {
    children: ReactNode;
}

const renderer = configureRenderer();

export const Core = ({ children }: CoreProps) => (
    <React.StrictMode>
        <Jotai>
            <Fela renderer={renderer}>
                <ReactQuery>{children}</ReactQuery>
            </Fela>
        </Jotai>
    </React.StrictMode>
);
