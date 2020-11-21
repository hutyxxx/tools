import './index.scss';
import { isClient } from '@powerfulyang/utils';

export * from './assets/icons';
export * from './components';
export * from './wrapper/MarkdownWrap/MarkdownWrap';

if (isClient) {
  const scriptElem = document.createElement('script');
  scriptElem.src = '//at.alicdn.com/t/font_178634_ahr86m08wkb.js';
  document.body.appendChild(scriptElem);
}
