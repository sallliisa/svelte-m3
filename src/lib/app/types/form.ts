import type { StringObject } from '.'
import type { Component } from 'vue'

export type FormTypes = 'text' | 'textarea' | 'radio' | 'date' | 'rich-select' | 'select' | 'file' | 'image' | 'lookup' | 'switch' | 'currency' | 'tag' | 'checkbox' | 'camera-input' | 'json-input' | 'custom'

export type FormControls = {
  visibility?: {
    validator: (val: any) => any
    default?: boolean
  }
  value?: {
    generator: (val: any) => any
    default?: any
  }
  props?: {
    generator: (val: any, currVal: any) => any
    default?: Object
  }
}

export type FormField = {
  type: FormTypes
  required?: boolean
  class?: string
  visible?: boolean
  controls?: { [key: string]: FormControls }
  hideLabel?: boolean
  hideLabelPreserve?: boolean
}

export type TextInput = FormField & {
  type: 'text'
  forbidUpdate?: boolean
  inputType?: string
  validator?: string
  globalValidator?: string
  prefix?: string
  postfix?: string
  maxlength?: number
}

export type TextAreaInput = FormField & {
  type: 'textarea'
  forbidUpdate?: boolean
  inputType?: string
  validator?: string
  globalValidator?: string
  allowResize?: boolean
}

export type CurrencyInput = FormField & {
  type: 'currency'
  forbidUpdate?: boolean
  inputType?: string
  validator?: string
}

export type TagInput = FormField & {
  type: 'tag'
  forbidUpdate?: boolean
  inputType?: string
  validator?: string
}

export type ImageInput = FormField & {
  type: 'image'
  maxSize?: number
  additionalInfo?: string
  allowMulti?: boolean
  limit?: number
  disableInformation?: boolean
}

export type SwitchInput = FormField & {
  type: 'switch'
  description?: string
}

export type CheckboxInput = FormField & {
  type: 'checkbox'
  description?: string
}

export type RadioInput = FormField & {
  type: 'radio'
  items?: Array<{ id: string | boolean | number; name: string; tooltip?: string }>
  initialBlank?: boolean
  pick?: string
  modelAPI?: string
  variant?: 'native' | 'card'
  direction?: 'column' | 'row'
}

export type DateInput = FormField & {
  type: 'date'
  picker?: 'date' | 'year'
  defaultToCurrentDate?: boolean
}

export type RichSelectInput = FormField & {
  type: 'rich-select'
  items?: Array<{ id: string; name: string }>
  pick?: string
  view?: string
  modelAPI?: string
  allowMulti?: boolean
}

export type SelectInput = FormField & {
  type: 'select'
  items?: Array<{ id: string; name: string }>
  pick?: string
  view?: string
  modelAPI?: string
}

export type FileInput = FormField & {
  type: 'file'
  named?: boolean
  allowMulti?: boolean
  accept?: string
  maxsize?: number
}

export type LookupInput = FormField & {
  type: 'lookup'
  pick?: string
  view?: string | Array<string>
  modelAPI: string
}

export type CameraInput = FormField & {
  type: 'camera-input'
}

export type JSONInput = FormField & {
  type: 'json-input'
}

export type CustomInput = FormField & {
  type: 'custom'
  componentName: string
  [key: string]: any
}
