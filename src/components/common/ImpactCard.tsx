import { motion } from 'framer-motion'

type Props = {
  title: string
  blurb: string
  metric?: string
  to?: string
}

export default function ImpactCard({ title, blurb, metric }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-[rgb(var(--secondary))] p-5 shadow-lg bg-[rgb(var(--surface))] backdrop-blur"
    >
              <h3 className="text-lg font-semibold text-[rgb(var(--fg))]">{title}</h3>
        {metric && <div className="mt-1 text-sm text-[rgb(var(--muted))]">{metric}</div>}
        <p className="mt-3 text-sm text-[rgb(var(--fg))]">{blurb}</p>
    </motion.article>
  )
}
