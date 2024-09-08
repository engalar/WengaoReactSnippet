import { ReactElement, createElement, useEffect } from "react";

import { WengaoReactSnippetContainerProps } from "../typings/WengaoReactSnippetProps";

import "./ui/WengaoReactSnippet.css";

export function WengaoReactSnippet({ customCode, content }: WengaoReactSnippetContainerProps): ReactElement {
  useEffect(() => {
    try {
      eval(customCode);
    } catch (error) {
      console.error(error);
    }
  }, [customCode]);
  return <div>{content}</div>;
}
