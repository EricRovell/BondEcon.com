interface Options {
  pattern?: RegExp | null;
  current: string;
}

/**
 * Action for marking active links via "aria-current" attribute.
 * 
 * Args:
 *  - pattern?: the regexp literal to test the if the link should be active;
 *  - current: the current href of the page;
 * 
 * If the pattern is not provided, the href attribute are compated with the current.
 */
export function active(node: HTMLAnchorElement, { pattern, current }: Options) {
  const href = node.getAttribute("href");
  
  function update({ pattern, current }: Options) {
    if (pattern && pattern instanceof RegExp) {
      (pattern.test(current))
        ? node.setAttribute("aria-current", "page")
        : node.removeAttribute("aria-current");
    } else {
      (!pattern && current === href)
        ? node.setAttribute("aria-current", "page")
        : node.removeAttribute("aria-current");
    }
  }
  
  update({ pattern, current });
  
  return {
    update
  };
}