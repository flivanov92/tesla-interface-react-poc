import React from 'react';
import { createRoot } from 'react-dom/client';
import { Tesla } from './component/tesla';

const here = document.querySelector('#here');
const root = createRoot(here);
const tesla = <Tesla />;

root.render(tesla);
