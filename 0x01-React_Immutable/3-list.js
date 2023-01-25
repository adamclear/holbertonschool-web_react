#!/usr/bin/node

import { List } from 'immutable';

export function getListObject(arr) {
  return List(arr);
}

export function addElementToList(list, element) {
  return list.push(element);
}
