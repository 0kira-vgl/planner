import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Separator } from "../../components/separator";
import { Button } from "../../components/button";

export function DistinationAndDateHeader() {
  return (
    <div className="flex h-16 items-center justify-between rounded-lg bg-zinc-900 px-4 shadow-shape">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">Florianópolis, Brasil</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">17 a 23 de Agosto</span>
        </div>

        <Separator />

        <Button variant="secundary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
