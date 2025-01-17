import { RightSquareOutlined } from '@ant-design/icons'
import { Flex, Typography } from 'antd'
import React from 'react'

const { Text } = Typography;

export default function EnterButton({children}) {
  return (
    <Flex align='center' gap={8}>
      <Text>{children}</Text>

      <RightSquareOutlined 
        style={{
            color: "white",
            cursor: "pointer"
        }} 
        onClick={() => console.log("works")}
      />
    </Flex>
  )
}
