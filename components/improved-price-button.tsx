"use client"

import { useState } from "react"
import { EuroIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ImprovedPriceButton() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={false}>
      {/* Sticky button that stays in a more accessible position */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40">
        <Button
          onClick={() => setOpen(true)}
          className="rounded-r-full rounded-l-none shadow-lg bg-sky-600 hover:bg-sky-700 text-white h-14 px-4 flex items-center gap-2 group"
          aria-label="Voir les tarifs"
        >
          <EuroIcon className="h-5 w-5" />
          <span className="opacity-0 max-w-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap">
            Tarifs
          </span>
        </Button>
      </div>

      <DialogContent
        className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white"
        hideClose={false}
        closePosition="top-right"
      >
        <DialogHeader className="border-b border-sky-100 pb-4 mb-6">
          <DialogTitle className="text-xl font-semibold text-sky-800">Tarifs</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="discovery" className="w-full">
          <TabsList className="flex w-full mb-6 bg-sky-50">
            <TabsTrigger value="discovery" className="flex-1 data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Découverte
            </TabsTrigger>
            <TabsTrigger value="aircraft" className="flex-1 data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Avions
            </TabsTrigger>
            <TabsTrigger value="membership" className="flex-1 data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Cotisations club
            </TabsTrigger>
            <TabsTrigger value="insurance" className="flex-1 data-[state=active]:bg-sky-600 data-[state=active]:text-white">
              Licences, assurances
            </TabsTrigger>
          
          </TabsList>

          <TabsContent value="discovery" className="space-y-4">
            <div className="rounded-lg border border-sky-100 overflow-hidden">
              <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                <h3 className="font-medium text-sky-800">Packs formation élémentaire</h3>
              </div>
              <div className="divide-y divide-sky-100">
                <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">4 vols sur avion école</p>
                    <p className="text-xs text-gray-500">cotisation annuelle incluse - Licence fédérale incluse - durée vol 45 mn</p>
                  </div>
                  <p className="font-semibold text-sky-700">574€</p>
                </div>
                <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">5 vols sur ULM Super Guépard</p>
                    <p className="text-xs text-gray-500">cotisation annuelle incluse - Licence fédérale incluse - durée vol 45 mn</p>
                  </div>
                  <p className="font-semibold text-sky-700">406€</p>
                </div>
              </div>
            </div>
          </TabsContent>
           <TabsContent value="discovery" className="space-y-4">
            <div className="rounded-lg border border-sky-100 overflow-hidden">
              <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                <h3 className="font-medium text-sky-800">Vols découverte (30 min)</h3>
              </div>
              <div className="divide-y divide-sky-100">
                <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">Robin DR480</p>
                    <p className="text-xs text-gray-500">1 à 3 personnes</p>
                  </div>
                  <p className="font-semibold text-sky-700">120€</p>
                </div>
                <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">Evektor</p>
                    <p className="text-xs text-gray-500">1 personne</p>
                  </div>
                  <p className="font-semibold text-sky-700">70€</p>
                </div>
                 <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">Super Guépard</p>
                    <p className="text-xs text-gray-500">1 personne</p>
                  </div>
                  <p className="font-semibold text-sky-700">60€</p>
                </div>
              </div>
            </div>
          </TabsContent>
            <TabsContent value="discovery" className="space-y-4">
            <div className="rounded-lg border border-sky-100 overflow-hidden">
              <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                <h3 className="font-medium text-sky-800">Vols d'initiation avec instructeur (30 min)</h3>
              </div>
              <div className="divide-y divide-sky-100">
                <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">Evektor</p>
                   
                  </div>
                  <p className="font-semibold text-sky-700">90€</p>
                </div>
                 <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">Super Guépard</p>
              
                  </div>
                  <p className="font-semibold text-sky-700">80€</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="aircraft" className="space-y-4">
            <div className="rounded-lg border border-sky-100 overflow-hidden">
              <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                <h3 className="font-medium text-sky-800">Tarifs horaires</h3>
              </div>
              <div className="divide-y divide-sky-100">
                <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">Evektor Sportstar</p>
                    <p className="text-xs text-gray-500">Biplace école</p>
                  </div>
                  <p className="font-semibold text-sky-700">114€/h</p>
                </div>
                <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">Robin DR400 180cv</p>
                    <p className="text-xs text-gray-500">Quadriplace voyage</p>
                  </div>
                  <p className="font-semibold text-sky-700">180€/h</p>
                </div>
                <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">Super guepard 100CV</p>
                    <p className="text-xs text-gray-500">ULM biplace</p>
                  </div>
                  <p className="font-semibold text-sky-700">90€/h</p>
                </div>
                 <div className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">Instruction</p>
                  </div>
                  <p className="font-semibold text-sky-700">27€/h</p>
                </div>
              </div>
            </div>
          </TabsContent>

<TabsContent value="insurance" className="space-y-4">
            <div className="rounded-lg border border-sky-100 overflow-hidden">
              <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                <h3 className="font-medium text-sky-800">Tarifs</h3>
              </div>
              <div className="divide-y divide-sky-100">
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">FFA</p>
                    <p className="font-semibold text-sky-700">96€</p>
                  </div>
                </div>
              </div>
               <div className="divide-y divide-sky-100">
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">FFA + Info pilote</p>
                    <p className="font-semibold text-sky-700">145€</p>
                  </div>
                </div>
              </div>
               <div className="divide-y divide-sky-100">
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">FFPULM</p>
                    <p className="font-semibold text-sky-700">85€</p>
                  </div>
                </div>
              </div>
               <div className="divide-y divide-sky-100">
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">FFPULM -25 ans</p>
                    <p className="font-semibold text-sky-700">43€</p>
                  </div>
                </div>
              </div>
                 <div className="divide-y divide-sky-100">
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">FFPULM -18 ans</p>
                    <p className="font-semibold text-sky-700">21€</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="membership" className="space-y-4">
            <div className="rounded-lg border border-sky-100 overflow-hidden">
              <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                <h3 className="font-medium text-sky-800">Membre actif</h3>
              </div>
              <div className="divide-y divide-sky-100">
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">Cotisation annuelle</p>
                    <p className="font-semibold text-sky-700">55€</p>
                  </div>
                </div>
              
              </div>
            </div>
            <div className="rounded-lg border border-sky-100 overflow-hidden">
              <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                <h3 className="font-medium text-sky-800">Membre non pilote</h3>
              </div>
              <div className="divide-y divide-sky-100">
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">Cotisation annuelle</p>
                    <p className="font-semibold text-sky-700">85€</p>
                  </div>
                </div>
              
              </div>
            </div>


            <div className="rounded-lg border border-sky-100 overflow-hidden">
              <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                <h3 className="font-medium text-sky-800">Participation aux frais de fonctionnement</h3>
              </div>
              <div className="divide-y divide-sky-100">
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">Avion</p>
                    <p className="font-semibold text-sky-700">125€</p>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">Ulm</p>
                    <p className="font-semibold text-sky-700">85€</p>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">Avion -21 ans</p>
                    <p className="font-semibold text-sky-700">65€</p>
                  </div>
                </div>
                 <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">Ulm -25 ans</p>
                    <p className="font-semibold text-sky-700">45€</p>
                  </div>
                </div>
                 <div className="px-4 py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-gray-700">Ulm -18 ans</p>
                    <p className="font-semibold text-sky-700">21€</p>
                  </div>
                </div>
                
              </div>
            </div>
          </TabsContent>

         
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
