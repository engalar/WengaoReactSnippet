import { ReactElement, createElement } from "react";
import { WengaoReactSnippetPreviewProps } from "../typings/WengaoReactSnippetProps";

export function preview({ class: clazz }: WengaoReactSnippetPreviewProps): ReactElement {
  return <div className={clazz}>WengaoReactSnippet</div>;
}

export function getPreviewCss(): string {
  return require("./ui/WengaoReactSnippet.css");
}
