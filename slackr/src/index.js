import {render} from 'react-dom';

import boot from './boot'
import './index.css';

render(
  boot(),
  document.getElementById('root')
);
