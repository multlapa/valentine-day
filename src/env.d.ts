/// <reference types='node' />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types='react' />
/// <reference types='react-dom' />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly MODE: 'development' | 'production';
        readonly PUBLIC_URL: string;
    }
}

declare module '*.gif' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    import React from 'react';
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare module '*.svg?url' {
    const src: string;
    export default src;
}

declare module '*.svg?inline' {
    const src: string;
    export default src;
}

declare module '*.svg?raw' {
    const src: string;
    export default src;
}

declare module '*.woff' {
    const src: string;
    export default src;
}

declare module '*.woff2' {
    const src: string;
    export default src;
}
