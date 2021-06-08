import { _each } from './_';
import { StringKeyObject, BindingEvent } from '../types/index';
import $ from './dom';

const bindEvents = (
  path: string,
  pagesEvents: StringKeyObject<BindingEvent[]>
): void => {
  _each(pagesEvents[path], ({ selector, event, eventHandler }) => {
    $(selector).addEventListener(event, eventHandler);
  });
};

export default bindEvents;
