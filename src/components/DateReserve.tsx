'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { Select,MenuItem,TextField} from "@mui/material"
import { useState } from "react"
import { Dayjs } from "dayjs"

export default function DateReserve({onDateChange,onLocationChange}:{onDateChange:Function,onLocationChange:Function}){

    const [reserveDate,setReserveDate] = useState<Dayjs | null>(null)
    const [location,setLocation] = useState('Bloom')
    
    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex-row justify-center">
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={reserveDate} 
                onChange={(value)=>{setReserveDate(value); onDateChange(value) }}/>
            </LocalizationProvider>

            <TextField variant="standard" name="Name-Lastname" label="Name-Lastname"></TextField>
            <TextField variant="standard" name="Contact-Number" label="Contact-Number"></TextField>

            <Select variant="standard" name="Name-Lastname" id="venue" value={location} onChange={(e)=>{setLocation(e.target.value); onLocationChange(e.target.value)}}
            className="h-[2em] w-[200px]">
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
        </div>
    )
}