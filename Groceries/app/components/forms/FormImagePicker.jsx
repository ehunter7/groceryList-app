import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import ErrorMessage from './ErrorMessage'
import ImageInputList from '../ImageInputList'

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext()
  const imageUris = values[name]

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri])
  }

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri !== uri),
    )
  }

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visisble={touched[name]} />
    </>
  )
}
