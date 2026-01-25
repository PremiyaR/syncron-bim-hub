import bg from '../assets/career_bg.png'

const jobs = [
  { title: "BIM Manager", count: 2 },
  { title: "BIM Coordinator", count: 3 },
  { title: "Senior BIM Modeller", count: 5 },
]

function Field({ label, placeholder, dark = false }) {
  const base =
    "w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-black/20"
  const light = "border-black/15 bg-white text-neutral-900 placeholder:text-neutral-500"
  const darkStyles = "border-white/25 bg-white/10 text-white placeholder:text-white/60 focus:ring-white/30"
  return (
    <label className="block">
      <span className={"mb-2 block text-sm font-semibold " + (dark ? "text-white" : "text-neutral-900")}>
        {label}
      </span>
      <input className={`${base} ${dark ? darkStyles : light}`} placeholder={placeholder} />
    </label>
  )
}

export default function Career() {
  return (
    <section id="career" className="relative">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid overflow-hidden rounded-[2rem] shadow-soft md:grid-cols-2">
          {/* Left: Job Opportunity */}
          <div className="bg-black p-8 text-white md:p-10">
            <h2 className="text-3xl font-extrabold tracking-tight">Career</h2>
            <div className="mt-3 text-lg font-semibold text-white/90">Job Oppertunity</div>

            <ul className="mt-6 space-y-3 text-sm">
              {jobs.map((j) => (
                <li key={j.title} className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>• {j.title}</span>
                  <span className="text-white/80">— {j.count}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-4">
              <Field dark label="Name:" placeholder="" />
              <Field dark label="Phone Number:" placeholder="" />
              <Field dark label="Email:" placeholder="" />
              <div>
                <span className="mb-2 block text-sm font-semibold text-white">Upload Your Resume:</span>
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm text-white file:mr-4 file:rounded-full file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:font-semibold file:text-black"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Internship */}
          <div className="bg-white p-8 md:p-10">
            <h3 className="text-xl font-extrabold tracking-tight">Internship Programme</h3>

            <div className="mt-6 grid gap-4">
              <Field label="Name:" placeholder="" />
              <Field label="Phone Number:" placeholder="" />
              <Field label="Email:" placeholder="" />

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-neutral-900">Describe your Interest…</span>
                <textarea
                  className="h-36 w-full resize-none rounded-2xl border border-black/15 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-neutral-500 focus:ring-2 focus:ring-black/20"
                  placeholder="Describe your Interest…"
                />
              </label>

              <div>
                <span className="mb-2 block text-sm font-semibold text-neutral-900">Upload Your Bio:</span>
                <input
                  type="file"
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-2 text-sm text-neutral-900 file:mr-4 file:rounded-full file:border-0 file:bg-black file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
                />
              </div>

              <button className="mt-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-neutral-900">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
