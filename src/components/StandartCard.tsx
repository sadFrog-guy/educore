import { Button, Card } from 'antd'
import React from 'react'

export default function StandartCard({isLoading = false, loadingElement = <></>, actions = [], children}) {
  return (
    <Card 
      bordered={false} 
      style={{ width: '100%' }} 
      size={'small'}
      actions={actions.length > 0 ? actions : []}
    >
      {isLoading
        ? loadingElement
        : children
      }
    </Card>
  )
}
