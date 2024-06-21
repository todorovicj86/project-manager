import logoImg from "../assets/logo.png";
export default function EmptyState({ onOpenForm }) {
  return (
    <section className="mt-24 text-center w-2/3">
      <img
        src={logoImg}
        alt="task logo image"
        className="size-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <button
        onClick={onOpenForm}
        type="button"
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        Create new project
      </button>
    </section>
  );
}
