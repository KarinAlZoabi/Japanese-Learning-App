export default function StatsCard() {
  return (
    <div
      className="
      flex
      items-center
      gap-5
      rounded-3xl
      bg-white/70
      px-6
      py-5
      shadow-xl
      backdrop-blur-xl
      w-fit
      "
    >

      <div className="flex -space-x-3">

        <img
          src="https://i.pravatar.cc/60?img=1"
          className="h-12 w-12 rounded-full border-2 border-white"
        />

        <img
          src="https://i.pravatar.cc/60?img=2"
          className="h-12 w-12 rounded-full border-2 border-white"
        />

        <img
          src="https://i.pravatar.cc/60?img=3"
          className="h-12 w-12 rounded-full border-2 border-white"
        />

      </div>

      <div>

        <h3 className="font-bold text-rose-500">
          Join 10,000+ learners
        </h3>

        <p className="text-sm text-stone-500">
          Start your Japanese journey today.
        </p>

      </div>

    </div>
  );
}