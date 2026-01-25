export default function SectionShell({ title, dark = false, children, id }) {
  return (
    <section id={id} className={dark ? "bg-black text-white" : "bg-white text-neutral-900"}>
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {title ? (
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">{title}</h2>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  )
}
