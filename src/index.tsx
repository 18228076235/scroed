import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

ReactDOM.render(
  <LocaleProvider locale={zh_CN}><App /></LocaleProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
