import { ReactElement, createElement, useEffect, createRef } from "react";

import { WengaoReactSnippetContainerProps } from "../typings/WengaoReactSnippetProps";

import "./ui/WengaoReactSnippet.css";

export function WengaoReactSnippet({ customCode, content }: WengaoReactSnippetContainerProps): ReactElement {
  const ref = createRef<HTMLDivElement>();
  useEffect(() => {
    const hostElement = ref.current!;
    const mutationObserver = new MutationObserver(() => {
      try {
        eval(customCode);
        // hardcode(hostElement);
      } catch (error) {
        console.error(error);
      }
      mutationObserver.disconnect();
    });
    mutationObserver.observe(hostElement, { childList: true });
    return () => {
      mutationObserver.disconnect();
    };
  }, []);
  return <div ref={ref}>{content}</div>;
}

// @ts-ignore
function hardcode(hostElement) {
  //.table-content .tr .th .column-container .filter .dropdown-container
  const tr = hostElement.querySelector('.table-content .tr');
  const mutaionObserver = new MutationObserver((mutations) => {
    mutations.forEach(m => {
      if (m.target === tr) {
        console.log('FreeLayout[mutaionObserver] mutation', m);
        m.addedNodes.forEach(onAdd(hostElement));
        m.removedNodes.forEach((thElement) => {
          const id = getIdClass(thElement);
          if (id) {
            const placeholer = hostElement.querySelector('.alert-info.' + id);
            placeholer.innerHTML = '';
          }
        });
      }
    });
  });
  mutaionObserver.observe(tr, { childList: true, subtree: true });

  // first add th
  tr.querySelectorAll('.th').forEach(onAdd(hostElement));
}

// @ts-ignore
function onAdd(hostElement) {
  // @ts-ignore
  return (thElement) => {
    const filter = thElement.querySelector('.filter');
    const id = getIdClass(thElement) || (filter.children.length > 0 ? getIdClass(filter.children[0]) : null);
    if (id) {
      thElement.classList.add(id);
      const placeholer = hostElement.querySelector('.alert-info.' + id);
      placeholer.appendChild(filter.children[0]);
    }
  };
}

// @ts-ignore
function getIdClass(dropdown) {
  // @ts-ignore
  return Array.from(dropdown.classList).find(c => c.startsWith('f-'))
}
