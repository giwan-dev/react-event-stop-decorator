import React from 'react';

export default function stop(target: object, key: string, descriptor: TypedPropertyDescriptor<React.MouseEventHandler>): TypedPropertyDescriptor<React.MouseEventHandler>|void {
  if (descriptor.value === undefined) {
    throw new TypeError(`${key} is not method`);
  }

  const fn = descriptor.value;

  descriptor.value = function (e: React.MouseEvent) {
    e.stopPropagation();
    fn.bind(this)(e);
  };

  return descriptor;
}
