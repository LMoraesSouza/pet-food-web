import { X } from "@phosphor-icons/react"
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
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-lg overflow-hidden shadow-xl">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-xl font-medium">Edit pet info</h2>
                            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <span 
                onClick={handleOpenModal}
                className={`py-1 flex w-20 rounded-[6px] items-center justify-center cursor-pointer  ${getStatusStyles()}`}
            >
                {time}
            </span>
        </>
    )
}
