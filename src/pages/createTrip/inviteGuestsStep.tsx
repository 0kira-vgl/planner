import { UserRoundPlus, ArrowRight } from "lucide-react";
import { Button } from "../../components/button";

interface InviteGuestsStepProps {
  openGuestsModal: () => void;
  emailsToInvite: string[];
  openConfirmTripModalOpen: () => void;
}

export function InviteGuestsStep({
  openGuestsModal,
  emailsToInvite,
  openConfirmTripModalOpen,
}: InviteGuestsStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex flex-1 items-center gap-2 text-left"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="flex-1 text-lg text-zinc-100">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="flex-1 text-lg text-zinc-400">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <Button onClick={openConfirmTripModalOpen}>
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
