import { Field } from 'payload/types';

const date = (name: string, label: string, readOnly: boolean, placeholder?: string): Field => {
  return {
    name,
    type: 'date',
    label,
    admin: {
      readOnly,
      placeholder,
      date: {
        displayFormat: 'dd/MM/yyyy',
        pickerAppearance: 'dayOnly',
      }
    }
  }
}

export default date;