#!/usr/bin/node
// eslint-disable-next-line no-unused-vars

import Immutable from 'immutable';

export default function accessImmutableObject(obj, array) {
  return Immutable.fromJS(obj).getIn(array);
}
