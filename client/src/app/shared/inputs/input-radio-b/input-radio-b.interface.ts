export interface iRadioBStep {
    type: string;
    identifier: string;
    wordToReplace: string;
    replacement: string;
    question: string;
    radios: Array<any>;
    indications: {
        areIndications: boolean;
        indicationsType: string;
        value: string;
    };
    mandatory: boolean;
    isFocused: boolean;
}
