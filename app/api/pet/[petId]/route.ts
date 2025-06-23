import { prisma } from "@/app/server/script";
import { parseFeedingTimes } from "@/app/server/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ userId: string, petId: string }> }) {
    try {
        const userId = (await params).userId;
        const petId = (await params).petId;

        if (!userId) {
            return NextResponse.json({ error: "User ID is required" }, { status: 500 });
        }

        const pet = await prisma.pets.findUnique({
            where: { id: petId },

        })

        if (!pet) {
            return NextResponse.json({ error: "User not found" }, { status: 500 });

        }

        const parsedPet = parseFeedingTimes(pet)

        return NextResponse.json({ parsedPet }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Failed fetching pets" }, { status: 500 });
    }
}