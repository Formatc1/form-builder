import TextInput from './TextInput.jsx';
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
  }
};

export {TextInput, TextareaInput, defaultValues};
