"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "@phosphor-icons/react"
import Image from "next/image"
import { Input } from "./input"

interface PetModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (petData: PetData) => void
  onDelete: () => void
  initialData?: PetData
}

interface PetData {
  name: string
  birthDate: string
  weight: string
  weightUnit: string
  foodName: string
  portion: string
  portionUnit: string
  timesADay: string
  imageUrl: string
}

export function PetDataModal({ 
    isOpen, 
    onClose, 
    onSave, 
    onDelete, 
    initialData 
}: PetModalProps) {
  const [petData, setPetData] = useState<PetData>({
    name: "",
    birthDate: "",
    weight: "",
    weightUnit: "Kg",
    foodName: "",
    portion: "",
    portionUnit: "g",
    timesADay: "",
    imageUrl: "/placeholder.svg?height=200&width=200",
  })

  useEffect(() => {
    if (initialData) {
      setPetData(initialData)
    }
  }, [initialData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPetData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(petData)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg overflow-hidden shadow-xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-medium">Edit pet info</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="p-4">
            <div className="flex gap-4 mb-6">
              <div className="w-32 h-32 overflow-hidden rounded-md">
                <Image
                  src={petData.imageUrl || "/placeholder.svg"}
                  alt="Pet"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex-1">
                <div className="mb-4">
                  
                  <Input
                    label="Name"
                    type="text"
                    name="name"
                    value={petData.name}
                    onChange={handleChange}
                    placeholder="Pet name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    
                    <Input
                      label="Birth Date"
                      type="text"
                      name="birthDate"
                      value={petData.birthDate}
                      onChange={handleChange}
                      placeholder="DD/MM/YYYY"
                    />
                  </div>
                  <div>
                    
                    <div className="">
                      <Input
                        label="Weight"
                        type="text"
                        name="weight"
                        value={petData.weight}
                        onChange={handleChange}
                        placeholder="0.00"
                        adornment={petData.weightUnit}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">Food info</h3>

              <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                  
                  <Input    
                    label="Food Name"
                    type="text"
                    name="foodName"
                    value={petData.foodName}
                    onChange={handleChange}
                    placeholder="Food brand and type"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                
                  
                  <div className="">
                    <Input
                      label="Portion"
                      type="text"
                      name="portion"
                      value={petData.portion}
                      onChange={handleChange}
                      placeholder="0.00"
                      adornment={petData.portionUnit}
                    />
                    
                  </div>
                <div>
                  <Input
                    label="Times A Day"
                    type="text"
                    name="timesADay"
                    value={petData.timesADay}
                    onChange={handleChange}
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between p-4 border-t">
            <button
              type="button"
              onClick={onDelete}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Excluir
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button type="submit" className="px-4 py-2 bg-[#628745] text-white rounded-lg hover:bg-green-700">
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
