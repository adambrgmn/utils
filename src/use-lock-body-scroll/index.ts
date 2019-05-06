import { useLayoutEffect, RefObject } from 'react';

/**
 * Will lock body and prevent it from being scrolled. Useful when showing a
 * modal or anything else when you don't want the user to be able to scroll the
 * body. From [useHooks](https://usehooks.com/useLockBodyScroll/).
 *
 * @param {boolean} [lock=true] Optional value if you want to lock body or not
 *
 * @example
 *   import { useLockBodyScroll } from '@fransvilhelm/hooks';
 *
 *   const Modal = () => {
 *     useLockBodyScroll();
 *     return (
 *       <div>
 *         <h2>Tips!</h2>
 *       </div>
 *     );
 *   }
 */
const useLockBodyScroll = (
  lock: boolean = true,
  ref?: RefObject<HTMLElement>,
): void => {
  useLayoutEffect(() => {
    if (ref && !ref.current) return;

    const el = ref && ref.current ? ref.current : document.body;

    if (lock) {
      const previousValue = el.style.overflow || 'visible';
      el.style.overflow = 'hidden';
      return () => {
        if (!el) return;
        el.style.overflow = previousValue;
      };
    }
  }, [lock, ref]);
};

export { useLockBodyScroll };
