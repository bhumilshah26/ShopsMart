import React from 'react';
import LineChart from './LineChart01';


export const chart1 = () => {
    const chartData = {
        labels: [
          '12-01-2020',
          '01-01-2021',
          '02-01-2021',
          '03-01-2021',
          '04-01-2021',
          '05-01-2021',
          '06-01-2021',
          '07-01-2021',
          '08-01-2021',
          '09-01-2021',
          '10-01-2021',
          '11-01-2021',
          '12-01-2021',
          '01-01-2022',
          '02-01-2022',
          '03-01-2022',
          '04-01-2022',
          '05-01-2022',
          '06-01-2022',
          '07-01-2022',
          '08-01-2022',
          '09-01-2022',
          '10-01-2022',
          '11-01-2022',
          '12-01-2022',
          '01-01-2023',
        ]}
  return (
    <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={389} height={128} />
    </div>
  )
}
