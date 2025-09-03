export type EducationItem = {
  id: string
  title: string
  institute: string
  period: string
  highlight: string // e.g., "8.3 cgpa" or "93%"
  tone: "rose" | "amber"
}

export const education: EducationItem[] = [
  {
    id: "btech",
    title: "Bachelor of Technology - Computer",
    institute: "DCRUST, Murthal",
    period: "2023–Present",
    highlight: "8.4 cgpa",
    tone: "rose",
  },
  {
    id: "xii",
    title: "Senior Secondary (XII) - Science",
    institute: "MLP School",
    period: "2021–2023",
    highlight: "93%",
    tone: "amber",
  },
]
