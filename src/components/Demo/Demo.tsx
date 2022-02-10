import React, { useState } from 'react'
import classes from 'src/style/Demo.module.css'
import Selector from '@components/Elements/selector'
import InputField from '@components/Elements/input'
import {
  BookDemoInter,
  BookDemoPayload,
} from '@components/interfaces/dashboardinterface'
import DatepickerElement from '@components/Elements/datepicker'
import { Timezones } from '@components/constants/timezone'
import { PhoneCodes } from '@components/constants/countrycode'
import { v4 as uuid } from 'uuid'
import QuizApi from 'src/api/Quiz'
import { CircularProgress } from '@material-ui/core'
import { Alert } from '@mui/material'
import { DemoProps } from '@components/interfaces/dashboardinterface'
let showAlert = <></>
const CurentDay = new Date()
const Demo = (props: DemoProps) => {
  const [phoneCode, setPhoneCode] = useState('91')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [pfirstname, setPfirstname] = useState('')
  const [plastname, setPlastname] = useState('')
  const [pgender, setPgender] = useState('male')
  const [pEmail, setPemail] = useState('')
  const [childName, setchildName] = useState('')
  const [grade, setgrade] = useState('1')
  const [course, setCourse] = useState('mathGenius')
  const [timeZone, setTimezone] = useState('')
  const [dateDay, setDateDay] = useState(CurentDay.getDate())
  const [dateMonth, setDateMonth] = useState(CurentDay.getMonth() + 1)
  const [dateYear, setDateYear] = useState(CurentDay.getFullYear())
  const [timeSlot, setTimeSlot] = useState(9)
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    const newDate = new Date()
    const date = newDate.getDate()
    const month = newDate.getMonth() + 1
    const year = newDate.getFullYear()
    console.log(date, month, year)
    const payload: BookDemoPayload = {
      phoneCode: phoneCode,
      phoneNumber: phoneNumber,
      parentFirstName: pfirstname,
      parentLastName: plastname,
      parentGender: pgender,
      parentEmail: pEmail,
      childName: childName,
      grade: grade,
      demoCourse: course,
      timezone: timeZone,
      dateDay: dateDay.toString(),
      dateMonth: dateMonth.toString(),
      dateYear: dateYear.toString(),
      timeslot: timeSlot.toString(),
      sendEmail: 'false',
      sessionId: uuid(),
      source: 'WEB',
      isAttended: 0,
      ipAddress: '',
    }
    console.log(payload)
    const url = `demo/bookDemo`
    const parsedData = ((await QuizApi.BookDemo(
      url,
      payload
    )) as unknown) as BookDemoInter
    if (parsedData.code.toString() === '200') {
      props.setDemoOpen(false)
      showAlert = (
        <Alert
          variant="filled"
          severity="success"
          style={{
            borderRadius: '0',
            position: 'absolute',
            zIndex: 10000,
            width: '100vw',
            background: 'green',
            color: 'white',
          }}
        >
          Successfully Slot Booked
        </Alert>
      )
    } else {
      showAlert = (
        <Alert
          variant="filled"
          severity="error"
          style={{
            borderRadius: '0',
            position: 'absolute',
            zIndex: 10000,
            width: '100vw',
            background: 'red',
            color: 'white',
          }}
        >
          Sorry ,Something Went Wrong !!
        </Alert>
      )
    }
    setLoading(false)
    setTimeout(() => {
      showAlert = <></>
    }, 3000)
  }
  const PhoneCode = PhoneCodes.map((val) => {
    return { value: val.dial_code, name: `${val.code} (${val.dial_code})` }
  })
  const Gender = [
    { value: 'male', name: 'Male' },
    { value: 'female', name: 'Female' },
    { value: 'other', name: 'Other' },
  ]
  const Grade = [
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
  const Course = [
    { value: 'mathGenius', name: 'Math Genius' },
    { value: 'superMemory', name: 'Super Memory' },
  ]
  const TimeZone = Timezones.map((e) => {
    return {
      name: e.text.split(')')[0] + `) ${e.value}`,
      value: e.text.split(')')[0] + `) ${e.value}`,
    }
  })

  return (
    <>
      {showAlert != <></> ? showAlert : null}
      <div
        className={classes.CrossButton}
        onClick={() => props.setDemoOpen(false)}
      >
        X
      </div>
      <div className={classes.MainDemoCover}>
        <div className={classes.MainDemoForm}>
          <div className={classes.MainDemoTitle}>Book Your Demo Class</div>
          <div className={classes.MainDemoFormCover}>
            <div className={classes.MainDemoFormQuarter1}>
              <Selector
                callback={setPhoneCode}
                data={PhoneCode}
                title="Phone Code"
              />
            </div>
            <div className={classes.MainDemoFormQuarter3}>
              <InputField callback={setPhoneNumber} data={'Phone Number'} />
            </div>
          </div>
          <div className={classes.MainDemoFormCover}>
            <div className={classes.MainDemoFormQuarter3}>
              <InputField callback={setchildName} data={'Child Name'} />
            </div>
            <div className={classes.MainDemoFormQuarterGrade}>
              <Selector callback={setgrade} data={Grade} title="Grade" />
            </div>
            <div className={classes.MainDemoFormQuarterCourse}>
              <Selector callback={setCourse} data={Course} title="Course" />
            </div>
          </div>
          <div className={classes.MainDemoFormCover}>
            <div className={classes.MainDemoFormHalf}>
              <InputField callback={setPfirstname} data={'Parent First Name'} />
            </div>
            <div className={classes.MainDemoFormHalf}>
              <InputField callback={setPlastname} data={'Parent Last Name'} />
            </div>
          </div>
          <div className={classes.MainDemoFormCover}>
            <div className={classes.MainDemoFormQuarter1}>
              <Selector
                callback={setPgender}
                data={Gender}
                title="Parent Gender"
              />
            </div>
            <div className={classes.MainDemoFormQuarter3}>
              <InputField callback={setPemail} data={'Parent Email-ID'} />
            </div>
          </div>

          <div className={classes.MainDemoFormCover}>
            <div className={classes.MainDemoFormFull}>
              <Selector
                callback={setTimezone}
                data={TimeZone}
                title="Time Zone"
              />
            </div>
          </div>
          <div className={classes.MainDemoFormCover}>
            <div className={classes.MainDemoFormFull}>
              <DatepickerElement
                setDateDay={setDateDay}
                setDateMonth={setDateMonth}
                setDateYear={setDateYear}
                setTimeSlot={setTimeSlot}
              />
            </div>
          </div>
          <div className={classes.MainDemoFormCover}>
            <div className={classes.MainDemoFormFull}>
              <button className={classes.SubmitButton} onClick={handleClick}>
                SUBMIT
              </button>
              {loading ? <CircularProgress color="primary" /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Demo
