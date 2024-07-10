import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./createActivityModal";
import { ImportantLinks } from "./importantLinks";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DistinationAndDateHeader } from "./distinationAndDateHeader";
import { Button } from "../../components/button";

export function TripDetails() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModalOpen() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModalOpen() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-24 py-10">
      <DistinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <Button onClick={openCreateActivityModalOpen}>
              <Plus className="size-5" />
              Cadastrar atividade
            </Button>
          </div>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="h-px w-full bg-zinc-800" />

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModalOpen={closeCreateActivityModalOpen}
        />
      )}
    </div>
  );
}
