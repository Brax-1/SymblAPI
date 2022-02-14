import React, { useState } from 'react'
import classes from 'src/style/Demo.module.css'
import Selector from '@components/Elements/selector'
import InputField from '@components/Elements/input'
import {
  Attendance,
  BookDemoInter,
  BookDemoPayload,
} from '@components/interfaces/dashboardinterface'
import DatepickerElement from '@components/Elements/datepicker'
import { v4 as uuid } from 'uuid'
import QuizApi from 'src/api/Quiz'
import { CircularProgress } from '@material-ui/core'
import { Alert } from '@mui/material'
import { DemoProps } from '@components/interfaces/dashboardinterface'
import { DateTimeStates } from '@components/interfaces/dashboardinterface'
import { styled } from '@material-ui/core'
import {
  PhoneCode,
  Gender,
  Grade,
  Course,
  TimeZones,
  Source,
} from 'src/components/constants/democodes'

const MyAlert = styled(Alert)({
  padding: 8,
  position: 'absolute',
  zIndex: 10000,
  width: '100%',
})
const CurentDay = new Date()
const Demo = (props: DemoProps) => {
  const [showAlert, setShowAlert] = useState(<></>)
  const [phoneCode, setPhoneCode] = useState(PhoneCode[0].name)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [pfirstname, setPfirstname] = useState('')
  const [plastname, setPlastname] = useState('')
  const [pgender, setPgender] = useState('Male')
  const [pEmail, setPemail] = useState('')
  const [childName, setchildName] = useState('')
  const [grade, setgrade] = useState('1')
  const [course, setCourse] = useState('Math Genius')
  const [timeZone, setTimezone] = useState(TimeZones[0].name)
  const [source, setSource] = useState('Phone')
  const [DateTime, setDateTime] = useState<DateTimeStates>({
    dateDay: CurentDay.getDate(),
    dateMonth: CurentDay.getMonth() + 1,
    dateYear: CurentDay.getFullYear(),
    timeSlot: 9,
  })
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
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
      dateDay: DateTime.dateDay.toString(),
      dateMonth: DateTime.dateMonth.toString(),
      dateYear: DateTime.dateYear.toString(),
      timeslot: DateTime.timeSlot,
      sendEmail: 'false',
      sessionId: uuid(),
      source: source,
      isAttended: Attendance.SCHEDULED,
      ipAddress: '',
    }
    const url = `demo/bookDemo`
    const parsedData = ((await QuizApi.BookDemo(
      url,
      payload
    )) as unknown) as BookDemoInter
    if (parsedData.data.code.toString() === '200') {
      props.setDemoOpen(false)
      setShowAlert(
        <MyAlert severity="success">Successfully Slot Booked</MyAlert>
      )
    } else {
      setShowAlert(
        <MyAlert severity="error">Sorry ,Something Went Wrong !!</MyAlert>
      )
    }
    setLoading(false)
    setTimeout(() => {
      setShowAlert(<></>)
    }, 3000)
  }

  return (
    <div className="DemoCover">
      {showAlert != <></> ? showAlert : null}
      <div
        className={classes.CrossButton}
        onClick={() => props.setDemoOpen(false)}
      >
        X
      </div>
      <div className={classes.MainDemoCover}>
        <div className={classes.MainDemoForm}>
          <div className={classes.MainDemoTitle}></div>
          <div className={classes.MainDemoFormCover}>
            <div className={classes.MainDemoFormQuarter1}>
              <Selector
                callback={setPhoneCode}
                data={PhoneCode}
                title="Phone Code"
              />
            </div>
            <div className={classes.MainDemoFormQuarter3}>
              <InputField
                type="text"
                callback={setPhoneNumber}
                data={'Phone Number'}
              />
            </div>
          </div>
          <div className={classes.MainDemoFormCover}>
            <div className={classes.MainDemoFormHalf}>
              <InputField
                type="text"
                callback={setchildName}
                data={'Child Name'}
              />
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
              <InputField
                type="text"
                callback={setPfirstname}
                data={'Parent First Name'}
              />
            </div>
            <div className={classes.MainDemoFormHalf}>
              <InputField
                type="text"
                callback={setPlastname}
                data={'Parent Last Name'}
              />
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
              <InputField
                type="email"
                callback={setPemail}
                data={'Parent Email-ID'}
              />
            </div>
          </div>

          <div className={classes.MainDemoFormCover}>
            <div className={classes.MainDemoFormFull}>
              <Selector
                callback={setTimezone}
                data={TimeZones}
                title="Time Zone"
              />
            </div>
          </div>
          <div className={classes.MainDemoFormCover}>
            <div className={classes.MainDemoFormHalf}>
              <DatepickerElement setDateTime={setDateTime} />
            </div>
            <div className={classes.MainDemoFormHalf}>
              <Selector callback={setSource} data={Source} title="Source" />
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
    </div>
  )
}

export default Demo
