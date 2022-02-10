import React from 'react'
import { MyChipProp } from '@components/interfaces/dashboardinterface'

const ChipGroup = (props: MyChipProp) => {
  return (
    <>
      <div className="ChipCover">
        <div className="ChipTitle">{props.title}</div>
        <div className="ChipGroup">
          {props.data.map((data) => {
            return (
              <div className="MainChipCover">
                <button
                  className={`MainChip ${
                    props.current === data.value ? 'chipActive' : null
                  }`}
                  onClick={() => props.callback(data.value)}
                >
                  {data.name}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ChipGroup
