import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        type: 'spline',
        reflow: true
    },
    title: {
        text: 'My chart'
    },
    series: [
        {
            data: [1, 2, 1, 4, 3, 6]
        },
        {
            data: [1, 1, 1, 4, 5, 8]
        },
        {
            data: [6, 7, 8, 4, 5, 2]
        }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                    height: 300
                },
                subtitle: {
                    text: null
                },
                navigator: {
                    enabled: false
                }
            }
        }]
    }
};

const Chart = () => (
    <div className="w-full">
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
);

export default Chart