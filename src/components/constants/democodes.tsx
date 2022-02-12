import { PhoneCodes } from './contantscode'
import { TimeZone } from './contantscode'

export const PhoneCode = PhoneCodes.map((val) => {
  return { value: val.dial_code, name: `${val.code} (${val.dial_code})` }
})
export const Gender = [
  { value: 'Male', name: 'Male' },
  { value: 'Female', name: 'Female' },
  { value: 'Other', name: 'Other' },
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
  { value: 'Math Genius', name: 'Math Genius' },
  { value: 'Super Memory', name: 'Super Memory' },
]
export const Source = [
  { value: 'Phone', name: 'Phone' },
  { value: 'Facebook', name: 'Facebook' },
  { value: 'Direct', name: 'Direct' },
  { value: 'Email', name: 'Email' },
  { value: 'Others', name: 'Others' },
]
export const ColumnName = [
  'id',
  'phoneCode',
  'phoneNumber',
  'parentFirstName',
  'parentGender',
  'parentEmail',
  'childName',
  'grade',
  'demoCourse',
  'timezone',
  'dateDay',
  'timeslot',
  'isAttended',
  'source',
  'createdAt',
]
export const TimeZones = TimeZone.map((e, index) => {
  return {
    key: index.toString(),
    name: e.text.split(')')[0] + `) ${e.value}`,
    value: e.text.split(')')[0] + `) ${e.value}`,
  }
})
