import moment from "moment"

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
    console.log(petName, getLastMeal)
    const getStatus = (): 'late' | 'eaten' | 'future' => {
        const now = moment()
        const feedingTime = moment(time, "HH:mm")
        const today = moment().format("YYYY-MM-DD")
        const feedingDateTime = moment(`${today} ${time}`, "YYYY-MM-DD HH:mm")
        
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
    
    const getStatusStyles = () => {
        const status = getStatus()
        switch(status) {
            case 'late':
                return 'bg-[#F3BCA0]'
            case 'eaten':
                return 'bg-[#BDD4AB]'
            case 'future':
                return 'bg-[#F6DEB7]'
            default:
                return 'bg-gray-200'
        }
    }

    return (
        <div 
            className={`px-2 py-1 rounded-[6px] inline-block cursor-pointer ${getStatusStyles()}`}
        >
            {time}
        </div>
    )
}
