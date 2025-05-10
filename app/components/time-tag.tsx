import moment from "moment"
import { useState } from "react"

type FoodTimeProps = {
    time: string
    petName: string
    lastFeedingDateTime: Date
    getLastMeal: () => void
}

export function TimeTag({
    time,
    petName,
    lastFeedingDateTime,
    getLastMeal
}: FoodTimeProps){
    const [showModal, setShowModal] = useState(false)

    console.log(petName)
    const getStatus = (): 'late' | 'eaten' | 'future' => {
        const now = moment()
        const feedingTime = moment(time, "HH:mm")
        const today = moment().format("YYYY-MM-DD")
        const feedingDateTime = moment(`${today} ${time}`, "YYYY-MM-DD HH:mm")
        getLastMeal()
        // Check if the feeding has been done today
        const lastFeedingDate = moment(lastFeedingDateTime)
        const isToday = lastFeedingDate.isSame(moment(), 'day')
        const isSameHour = lastFeedingDate.format("HH") > feedingTime.format("HH")
        
        if (isToday && isSameHour) {
            return 'eaten'
        }
        
        // If the feeding time is in the past and hasn't been marked as eaten
        if (feedingDateTime.isBefore(now)) {
            return 'late'
        }
        
        // If the feeding time is in the future
        return 'future'
    }

    function handleOpenModal() {
        console.log('mostrou modal', showModal)
        setShowModal(true)
    }
    
    const getStatusStyles = () => {
        const status = getStatus()
        switch(status) {
            case 'late':
                return 'bg-[#F3BCA0]'
            case 'eaten':
                return 'bg-[#BDD4AB]'
            case 'future':
                return 'bg-[#EFE7E7]'
            default:
                return 'bg-gray-200'
        }
    }

    return (
        <>
            
            <span 
                onClick={handleOpenModal}
                className={`py-1 flex w-20 rounded-[6px] items-center justify-center cursor-pointer  ${getStatusStyles()}`}
            >
                {time}
            </span>
        </>
    )
}
