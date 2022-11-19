import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

function AppFormField({ name, width, value, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext()
  let fieldValue = values[name]
  if (name === 'Total Time') {
    fieldValue = values.prepTime + values.cookTime
  }

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={fieldValue}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormField
