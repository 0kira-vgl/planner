import { X, AtSign, Plus } from "lucide-react";
import { FormEvent } from "react";

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  removeEmailFromInvites: (email: string) => void;
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
}

export function InviteGuestsModal({
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInvites,
  addNewEmailToInvite,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button onClick={closeGuestsModal} type="button">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5"
              >
                <span className="text-zinc-300">{email}</span>
                <button
                  onClick={() => removeEmailFromInvites(email)}
                  type="button"
                >
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="h-px w-full bg-zinc-800" />

        <form
          onSubmit={addNewEmailToInvite}
          className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-2.5"
        >
          <div className="flex flex-1 items-center gap-2 px-2">
            <AtSign className="size-5 text-zinc-400" />
            <input
              name="email"
              type="email"
              placeholder="Digite o e-mail do convidado"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
          >
            Convidar
            <Plus className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
