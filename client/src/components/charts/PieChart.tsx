
import React, {Fragment} from 'react'
import ReactApexChart from 'react-apexcharts'
import { Typography,Stack,Box } from '@pankod/refine-mui'
import { PieChartProps } from 'interfaces/home'

const PieChart = ({title,value,series,colors}:PieChartProps) => {
  return (
    
     <Box 
     flex = {1}
     display= "flex"
     bgcolor = "#fcfcfc"
     alignItems= 'center'
     justifyContent = 'space-between'
     borderRadius= "15px"
     width = "fit-content"
     pl={3.5}
     py={2}
     gap={2}
     minHeight="110px"
     border = "10px black"
     
     >
       <Stack gap = {2} direction = "column">
        <Typography color = '#808191' fontSize={14}>{title}</Typography>
         <Typography fontSize={24} 
         color = "#11142d"
         fontWeight = {700}
         mt = {1}
         > {value}
         </Typography>
       </Stack>
       <ReactApexChart
          options={{
            chart: { type: "donut" },
            colors,
            legend: { show: false },
            dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width="120px"
       /> 

      
      
      
    </Box>
    
   
  )
}

export default PieChart