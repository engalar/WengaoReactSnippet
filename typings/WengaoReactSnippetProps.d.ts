/**
 * This file was generated from WengaoReactSnippet.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export interface WengaoReactSnippetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    customCode: string;
    content?: ReactNode;
}

export interface WengaoReactSnippetPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    customCode: string;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
}
