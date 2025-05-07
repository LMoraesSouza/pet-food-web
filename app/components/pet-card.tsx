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

    return (
        <div className='flex p-5 border-[#EFE7E7] rounded-2xl border-[1px] bg-[#F5F0F0] max-w-md flex-col'>
            <div className="flex gap-6">
                <Image 
                    src={picture} 
                    alt="pet" 
                    className="w-[150px] h-[130px] rounded-xl"
                />

                <div className="flex gap-1">
                    {foodTimeArray.map(time => (
                        <TimeTag key={time} lastFeedingDateTime={petInfo.lastFeedingDateTime} time={time} petName={petInfo.name} getLastMeal={() => {}}/>
                    ))}
                </div>
            </div>

            <div className="color-[#3D2929]">
                <h3 className="font-bold text-base">
                    {petInfo.name}
                </h3>
                
            </div>
        </div>
    )
}