import { Input } from '../interfaces';

export class InputText implements Input {
    type: string;
    identifier: string;
    wordToReplace: string;
    isFocused: boolean;
    replacement: string;
    extraReplacements: any[];
}