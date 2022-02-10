import { PhoneCodes } from './contantscode'
import { TimeZone } from './contantscode'

export const PhoneCode = PhoneCodes.map((val) => {
  return { value: val.dial_code, name: `${val.code} (${val.dial_code})` }
})
export const Gender = [
  { value: 'male', name: 'Male' },
  { value: 'female', name: 'Female' },
  { value: 'other', name: 'Other' },
]
export const Grade = [
  { value: '1', name: '1' },
  { value: '2', name: '2' },
  { value: '3', name: '3' },
  { value: '4', name: '4' },
  { value: '5', name: '5' },
  { value: '6', name: '6' },
  { value: '7', name: '7' },
  { value: '8', name: '8' },
  { value: '9', name: '9' },
  { value: '10', name: '10' },
  { value: '11', name: '11' },
  { value: '12', name: '12' },
]
export const Course = [
  { value: 'mathGenius', name: 'Math Genius' },
  { value: 'superMemory', name: 'Super Memory' },
]
export const TimeZones = TimeZone.map((e) => {
  return {
    name: e.text.split(')')[0] + `) ${e.value}`,
    value: e.text.split(')')[0] + `) ${e.value}`,
  }
})
