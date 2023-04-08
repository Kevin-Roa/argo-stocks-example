import * as React from 'react'
import { Card, List } from '@utd-argo/ux-master-library'
import { stocks } from '@/config'

const StockList = () => {
    let list = stocks as unknown as string[]
    return (
        <Card style={{width: '100%', height: '90%', margin: '0rem 1rem', position: "relative"}}>
            <div className="flex justify-center items-center absolute h-[90%] w-[90%] overflow-y-auto">
                <List listItems={list} variant="togglelist" />
            </div>
        </Card>
    )
}

export default StockList