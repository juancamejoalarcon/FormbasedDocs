export interface Input  {
    type: string;
    identifier: string;
    wordToReplace: string;
    isFocused: boolean;
    replacement: string;
    extraReplacements?: any[];
    content?: any[];
    forEachFocused?: boolean;
    value?: any;
}
