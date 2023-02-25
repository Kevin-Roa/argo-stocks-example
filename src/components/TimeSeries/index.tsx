import React from 'react'
import Chart from '@/components/TimeSeries/Chart'


const TimeSeries = () => (
    <div className="time-series-wrapper flex flex-row flex-nowrap">
        <div className="w-3/4">
            <Chart />
        </div>
        <div className="w-1/4">
            <p>Storybook Card / List Here</p>
        </div>
    </div>

);

export default TimeSeries