import { createRoot } from 'react-dom/client';

import { Core } from 'modules/core';

import { App } from './components/App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <Core>
        <App />
    </Core>,
);
