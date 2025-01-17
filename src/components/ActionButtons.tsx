import { Button, Flex, Space } from 'antd'
import React from 'react'

export default function ActionButtons({actions}) {
  return (
    <Flex>
      <Space>
        {actions.map((action, index) => (
          <div key={index}>
            <Button
              type={action.type || 'default'}
              onClick={action.callback}
              disabled={!action.callback}
              shape={action.shape || "default"}
            >
              {action.label}
            </Button>
            {action.modal}
          </div>
        ))}
      </Space>
    </Flex>
  )
}
