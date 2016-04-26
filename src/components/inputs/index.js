import TextInput from './TextInput.jsx';
import CheckboxInput from './CheckboxInput.jsx';
import SelectInput from './SelectInput.jsx';
import TextareaInput from './TextareaInput.jsx';

const defaultValues = {
  text: {
    label: '',
    placeholder: '',
    value: ''
  },
  password: {
    label: '',
    placeholder: '',
    value: ''
  },
  email: {
    label: '',
    placeholder: '',
    value: ''
  },
  number: {
    label: '',
    placeholder: '',
    value: '0'
  },
  textarea: {
    label: '',
    placeholder: '',
    value: ''
  },
  radio: {
    label: '',
    value: [],
    options: []
  },
  checkbox: {
    label: '',
    value: [],
    options: []
  },
  select: {
    label: '',
    value: '',
    options: []
  }
};

export {TextInput, CheckboxInput, SelectInput, TextareaInput, defaultValues};
