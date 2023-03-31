export const isNil = (value: unknown) => isUndefined(value) || isNull(value)

export const isUndefined = (value: unknown) => value === undefined

export const isNull = (value: unknown) => value === null

export const getDataType = (value: unknown) =>
  isNil(value) === true ? 'nil' : value.constructor.name.toLowerCase()

export const isEmptyObject = (value: Record<string, unknown>) =>
  value === undefined ||
  value === null ||
  (value && Object.keys(value).length === 0)

export const isEmptyString = (value: string) => value === ''

export const isString = (value: unknown) => getDataType(value) === 'string'

export const isNumber = (value: unknown) => getDataType(value) === 'number'

export const isBoolean = (value: unknown) => getDataType(value) === 'boolean'

export const isArray = (value: unknown) => Array.isArray(value)

export const isObject = (value: unknown) =>
  !isNil(value) && getDataType(value) === 'object'

export const isEmptyArray = (value: any) => isArray(value) && value.length === 0

export const isNonEmptyArray = (value: any) =>
  isArray(value) && value.length !== 0

export const isNonEmptyObject = (value: any) =>
  !isNil(value) && Object.keys(value).length > 0
