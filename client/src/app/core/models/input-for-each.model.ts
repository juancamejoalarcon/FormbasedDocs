import { Input } from '../interfaces';

export class InputForEach implements Input {
    type: string;
    identifier: string;
    wordToReplace: string;
    isFocused: boolean;
    replacement: string;
    extraReplacements: any[];
    forEachFocused: boolean;
    content: any[];
    value: any;
}