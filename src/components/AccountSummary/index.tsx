import * as React from 'react'
import { Accordion } from '@utd-argo/ux-master-library'

const AccountSummary = () => (
    <div className="w-full">
        <Accordion header="Earnings">
            <div className="">
                <p>2.1% Increase since Feburary 28th, 2023</p>
            </div>
        </Accordion>
        <Accordion header="Dividends">
            <div className="">
                <p>2.4% Increase since Feburary 28th, 2023</p>
            </div>
        </Accordion>
        <Accordion header="YoY Increase">
            <div className="">
                <p>Average of 7%</p>
            </div>
        </Accordion>
        <Accordion header="AI Insights">
            <div className="">
                <p>Losses accumulate in Feb</p>
            </div>
        </Accordion>
    </div>
)

export default AccountSummary