import Button from '../Button';
import React from 'react';
import { useFormikContext } from 'formik';

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
