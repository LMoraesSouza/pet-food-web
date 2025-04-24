import { Pets } from "@/generated/prisma"



export const parseFeedingTimes = (pet: Pets) => {
    try {
        return {
            ...pet,
            feedingTimes: pet.feedingTimes ? JSON.parse(pet.feedingTimes) : []
        }
    } catch (error) {
        console.error(`Error parsing feedingTimes for pet ${pet.id}:`, error)
        return {
            ...pet,
            feedingTimes: []
        }
    }
}

export async function sendEmail(email: string, type: string, token: string) {

}