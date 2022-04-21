import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import ErrorMessage from './ErrorMessage'
import ImageInputList from '../ImageInputList'
import ImageInput from '../ImageInput'

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext()
  // const imageUris = values[name]
  const imageUris = values.image

  const handleAdd = (uri) => {
    // setFieldValue(name, [...values[name], uri])
    setFieldValue(name, uri)
  }

  //Was used when uploading mulitple images
  // const handleRemove = (uri) => {
  //   setFieldValue(
  //     name,
  //     values[name].filter((imageUri) => imageUri !== uri),
  //   )
  // }

  return (
    <>
      {/* <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      /> */}
      <ImageInput
        imageUri={imageUris}
        onChangeImage={(imageUris) => handleAdd(imageUris)}
      />
      {/* <ImageInput
        imageUri={values[name]}
        onChangeImage={() => handleRemove(values[name])}
      /> */}

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
