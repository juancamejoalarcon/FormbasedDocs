export interface iTextStep {
  type: string;
  identifier: string;
  wordToReplace: string;
  replacement: string;
  question: string;
  indications: {
    areIndications: boolean;
    indicationsType: string;
    value: string;
  },
  mandatory: boolean;
  isFocused: boolean;
};