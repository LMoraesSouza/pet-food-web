import { prisma } from "@/app/server/script";
import { parseFeedingTimes } from "@/app/server/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: { params: Promise<{ userId: string }> }) {
    try {
        const userId = (await params).userId;

        if (!userId) {
            return NextResponse.json({ error: "User ID is required" }, { status: 500});
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                pets: {
                    include: {
                        pet: true
                    }
                }
            }
        })

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 500});
           
        }

        const pets = user.pets.map(relation => parseFeedingTimes(relation.pet));

        return NextResponse.json({ pets }, { status: 200});
    } catch (error) {
        return NextResponse.json({ error: "Failed fetching pets" }, { status: 500});
    }
}