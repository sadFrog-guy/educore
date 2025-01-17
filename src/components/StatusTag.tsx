import { Tag } from 'antd'
import React from 'react'

export default function StatusTag({associations, name, tag}) {
  return (
    <Tag color={associations[tag]}>
      {name}
    </Tag>
  )
}