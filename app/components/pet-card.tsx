"use client"
import Image, { StaticImageData } from "next/image"
import { Pet } from "../stores/petsStore"
import { TimeTag } from "./time-tag"

interface PetCardTypes {
    petInfo: Pet
    picture: StaticImageData
    foodTimeArray: string[]
}

export function PetCard({
    petInfo,
    picture,
    foodTimeArray
}: PetCardTypes) {

    console.log(petInfo, picture, foodTimeArray)

    function getPortionFromDailyFoodAmount(dailyAmount: string) {
        const amount = dailyAmount.replace(/[^0-9]/g, '');
        const unit = dailyAmount.replace(/[^a-zA-Z]/g, '');
        const portion = Number(amount) / foodTimeArray.length
        return `${portion}${unit} / porção`
    }

   

    return (
        <div className='flex p-5 border-[#EFE7E7] rounded-2xl border-[1px] bg-[#F5F0F0] gap-6'>
            <div className="flex gap-6 flex-col">
                <Image 
                    src={picture} 
                    alt="pet" 
                    className="w-[150px] h-[130px] rounded-xl"
                />
                <div>
                    <p className="font-bold text-base color-[#3D2929]">
                        {petInfo.name}
                    </p>
                    <p className="font-bold text-base color-[#3D2929]">
                        {getPortionFromDailyFoodAmount(petInfo.dailyFoodAmount)}
                    </p>
                </div>
                
            </div>

            <div>
                <div className="grid grid-cols-3 gap-3" >
                    {foodTimeArray.map(time => (
                        <TimeTag key={time} lastFeedingDateTime={petInfo.lastFeedingDateTime} time={time} petName={petInfo.name} getLastMeal={() => {}}/>
                    ))}
                </div>
            </div>
        </div>
    )
}