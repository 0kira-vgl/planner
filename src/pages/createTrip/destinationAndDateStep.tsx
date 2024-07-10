import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";
import { Separator } from "../../components/separator";
import { Button } from "../../components/button";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestInput: () => void;
  openGuestInput: () => void;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestInput,
  openGuestInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Para onde você vai?"
          className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
        />
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Quando?"
          className="w-40 bg-transparent text-lg placeholder-zinc-400 outline-none"
        />
      </div>

      <Separator />

      {isGuestsInputOpen ? (
        <Button onClick={closeGuestInput} variant="secundary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
