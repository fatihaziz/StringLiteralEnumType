import { createLiteralOptionType } from './string_literal_enum_type.util.ts'
const { getValidValue } = createLiteralOptionType([`A`, `B`] as const);
console.log(getValidValue(`V`, { throwError: false })); // return undefined
console.log(getValidValue(`V`, { throwError: false, defaultValue: 'A' })); // return "A"
