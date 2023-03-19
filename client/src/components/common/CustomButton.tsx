import React from 'react'
import {Button, unstable_extendSxProp} from '@pankod/refine-mui'
import {CustomButtonProps} from 'interfaces/common'
const CustomButton = ({type,title,backgroundColor, color, fullWidth,icon,disabled,handleClick}: CustomButtonProps) => {
  return (
    <Button type = {type==='submit'?'submit':'button'}
    disabled={disabled}
     sx = {{
      backgroundColor,
      color,
      padding: '15px 20px',
      flex: fullWidth? 1:'unset',
      width: fullWidth?'100%':'fit-content',
      minWidth:130,
      fontSize:16,
      fontWeight:600,
      '&:hover':{
         opacity:0.9,
         backgroundColor,
      }
     }}
     onClick = {handleClick}
    >
      {icon}
      {title}
    </Button>
  )
}

export default CustomButton