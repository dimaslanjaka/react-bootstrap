import * as React from 'react';
import classNames from 'classnames';

export const divWithClassName = (className: string) =>
  React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>((p, ref) => (
    <div
      {...p}
      ref={ref}
      className={classNames((p as any).className, className)}
    />
  ));

export default divWithClassName
