import { PetCard } from "@/app/components/pet-card";

import fotoProvisoriaShiva from '@/public/pictures/imagem shiva.jpg';
import fotoProvisoriaLuci from '@/public/pictures/imagem luci.jpg';

export default function Home(){
    return(
        <div className="flex items-center flex-col pt-14 gap-8 ">
            <h2 className="color-black font-bold text-xl">
                Olá! Não se esqueça de alimentar seus pets 🐶🐱
            </h2>

            <div>
                <PetCard 
                    foodTimeArray={['10:00', '12:00', '14:00', '18:00', '20:00']}
                    picture={fotoProvisoriaLuci}
                    petInfo={
                        {   
                            id: '1', 
                            name: 'Luci', 
                            dailyFoodAmount: '70g', 
                            lastMeal: 10, 
                            feedingTimes: ['10:00', '12:00', '14:00', '18:00', '20:00'], 
                            lastFeedingDateTime: new Date, 
                            birth: new Date, 
                            foodName: 'Ração Luci', 
                            weight: 10
                        }
                    }
                />

                <PetCard 
                    foodTimeArray={['10:00', '12:00', '14:00', '18:00', '20:00']}
                    picture={fotoProvisoriaShiva}
                    petInfo={
                        {   
                            id: '2', 
                            name: 'Shiva', 
                            dailyFoodAmount: '45g', 
                            lastMeal: 10, 
                            feedingTimes: ['10:00', '12:00', '14:00', '18:00', '20:00'], 
                            lastFeedingDateTime: new Date, 
                            birth: new Date, 
                            foodName: 'Ração Shiva', 
                            weight: 10
                        }
                    }
                />
            </div>
        </div>
    )
}