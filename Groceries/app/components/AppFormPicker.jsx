import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker from './AppPicker'
import ErrorMessage from './forms/ErrorMessage'

function AppFormPicker({
  items,
  name,
  width,
  numberOfColumns,
  placeholder,
  PickerItemComponent,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext()

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormPicker
