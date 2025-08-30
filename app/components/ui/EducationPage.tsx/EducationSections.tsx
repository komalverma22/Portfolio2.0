import { education, type EducationItem } from "../../../data/educationData"
import { Judson } from "next/font/google"
type Tone = "rose" | "amber"
const judson = Judson({ subsets: ["latin"], weight: "700" })
const judsonn = Judson({ subsets: ["latin"], weight: "400" })
const toneStyles: Record<Tone, { card: string; highlight: string; border: string }> = {
  rose: {
    card: "bg-[#FCBED4]",
    border: "border-[#670045]",
    highlight: "text-[#670045]",
  },
  amber: {
    card: "bg-[#FDF3C7]",
    border: "border-[#670045]",
    highlight: "text-amber-900",
  },
}

function EducationCard({ item }: { item: EducationItem }) {
  const tone = toneStyles[item.tone]

  return (
    <article
      className={`rounded-sm  border-2 shadow-sm p-4 md:p-6 ${tone.card} ${tone.border}`}
      aria-labelledby={`ed-${item.id}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0  w-full">
          <h3 id={`ed-${item.id}`} className={`font-bold  sm:font-semibold text-base md:text-[35px] leading-6 text-pretty ${judson.className}`}>
            {item.title}
          </h3>
          <p className={`my-0  md:my-3  text-base md:text-[24px] leading-5 opacity-95 ${judsonn.className}`}>{item.institute}</p>

          <div className="flex items-center justify-between">

      
          <p className={` text-sm md:text-[24px] leading-5 opacity-100 ${judsonn.className}`}
          style={{
            color: "var(--landing-heading-text-color)"
          }}
          >{item.period}</p>

            <span className={`text-sm md:text-[24px] font-semibold  ${tone.highlight} ${judsonn.className}`} >
          {item.highlight}
        </span>
            </div>
        </div>

      
      </div>
    </article>
  )
}

export default function Page() {
  return (
    <main className="min-h-auto  w-auto  sm:w-[865px] mx-auto h-[142px] items-center">
      <section className="mx-auto  px-4 pb-10 md:pb-15">
    

        <div className="flex flex-col gap-5  sm:gap-12">
          {education.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  )
}
