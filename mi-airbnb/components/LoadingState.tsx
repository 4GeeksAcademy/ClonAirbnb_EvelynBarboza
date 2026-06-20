interface LoadingStateProps {
  label?: string;
}

export function LoadingState({ label }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-8 text-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-200 border-t-rose-500" />
      <p className="text-sm text-zinc-600">{label ?? "Cargando alojamientos..."}</p>
    </div>
  );
}
