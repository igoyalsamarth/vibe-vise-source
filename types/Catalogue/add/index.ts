export interface IFormFields {
  [key: string]: {
    label: string;
    groups: IFormGroup[];
  };
}

interface IFormGroup {
  heading?: string;
  tooltip?: string;
  fields: IFormField[];
}

interface IFormField {
  name: string;
  label: string;
  placeholder: string;
  tooltip: string;
  required: boolean;
  checkboxLabel?: string;
}