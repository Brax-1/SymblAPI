export interface ApiInnerData {
  activity_name: string
  attemp_numer: number
  attempt_type: boolean
  consistency: string
  date: string
  leaderboard_rank: number
  level: string
  level_attempt_type: boolean
  name: string
  score: number
}
export interface DemoDataApi {
  childName: string
  createdAt: string
  dateDay: string
  dateMonth: string
  dateYear: string
  demoCourse: string
  grade: string
  id: number
  ipAddress: string
  isAttended: string
  parentEmail: string
  parentFirstName: string
  parentGender: string
  parentLastName: string
  phoneCode: string
  phoneNumber: string
  sendEmail: string
  sessionId: string
  source: string
  timeslot: string
  timezone: string
}
export interface DemoDataCover {
  data: {
    code: string | number
    allDemoDetails: [DemoDataApi[], number]
  }
  code: string | number
  error: boolean
  message: string
}
export interface MyTableProps {
  data: ApiInnerData[]
}
export interface FilterBox {
  search: string
  sort: string
}
export interface MySelectorProps {
  callback: (n: string) => void
  data: { value: string; name: string; key?: string }[]
  title?: string
}
export interface MyInputProps {
  callback: (n: string) => void
  data: string
}
export interface MyChipProp {
  callback: (n: string) => void
  data: { value: string; name: string }[]
  title: string
  current: string
}
export enum Attendance {
  SCHEDULED,
  PRESENT,
  ABSENT,
  RESCHEDULED,
}
export interface BookDemoPayload {
  phoneCode: string
  phoneNumber: string
  parentFirstName: string
  parentLastName: string
  parentGender: string
  parentEmail: string
  childName: string
  grade: string
  demoCourse: string
  timezone: string
  dateDay: string
  dateMonth: string
  dateYear: string
  timeslot: string
  sendEmail: string
  sessionId: string
  source: string
  isAttended: Attendance
  ipAddress: string
}
export interface LoginMessageFormat {
  error: boolean
  data: {
    code: string | number
    error: boolean
    msg: string
    data: { token: string }
  }
}
export interface BookDemoInter {
  code: string | number
  data: { code: string; message: string }
}

export interface DemoProps {
  setDemoOpen: (n: boolean) => void
}
export interface DateTimeStates {
  dateDay: number
  dateMonth: number
  dateYear: number
  timeSlot: number
}
export interface DateAndTime {
  setDateTime: (n: DateTimeStates) => void
}
