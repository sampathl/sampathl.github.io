import { useLayout } from '../../../components/layout/Layout'
import { cn } from '../../../lib/cn'
import ExpandableExperience from './ExpandableExperience'

export default function ExperienceSection() {
  const { isCollapsed } = useLayout()
  
  const experiences = [
    {
      id: "1",
      title: "Model retraining 90% faster",
      metric: "PySpark tuning & query refactors",
      blurb: "Cut retraining query time with optimized SQL and configuration; improved iteration speed for DS teams.",
      category: "Data Engineering",
      icon: "data_usage",
      fromDate: "Jan 2024",
      toDate: "Present"
    },
    {
      id: "2",
      title: "Support ops cost ↓ ~24%",
      metric: "AWS Connect phone infra revamp",
      blurb: "Rationalized IVR flows and observability; reduced vendor usage and idle time.",
      category: "Infrastructure",
      icon: "phone",
      fromDate: "Sep 2023",
      toDate: "Dec 2023"
    },
    {
      id: "3",
      title: "Data pipeline latency ↓ 70%",
      metric: "Kafka to S3 streaming optimization",
      blurb: "Implemented efficient data serialization and batching for real-time analytics.",
      category: "Data Engineering",
      icon: "stream",
      fromDate: "Jun 2023",
      toDate: "Aug 2023"
    },
    {
      id: "4",
      title: "API response time ↓ 50%",
      metric: "FastAPI & async processing",
      blurb: "Optimized backend endpoints with asynchronous operations and caching strategies.",
      category: "Performance",
      icon: "api",
      fromDate: "Mar 2023",
      toDate: "May 2023"
    },
    {
      id: "5",
      title: "User engagement ↑ 15%",
      metric: "Redesigned UI/UX for internal tools",
      blurb: "Improved usability and visual appeal of internal dashboards and reporting tools.",
      category: "User Experience",
      icon: "design_services",
      fromDate: "Jan 2023",
      toDate: "Feb 2023"
    },
    {
      id: "6",
      title: "Infrastructure cost ↓ 10%",
      metric: "Serverless architecture adoption",
      blurb: "Migrated monolithic services to AWS Lambda, reducing operational overhead.",
      category: "Infrastructure",
      icon: "cloud",
      fromDate: "Oct 2022",
      toDate: "Dec 2022"
    }
  ]

  return (
    <section id="experience" className="py-16 min-h-screen">
      <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
        Impact & Experience
      </h2>
      <div className={cn(
        "content-pane",
        isCollapsed ? "data-sidebar-collapsed" : ""
      )} data-sidebar-collapsed={isCollapsed.toString()}>
        <ExpandableExperience experiences={experiences} />
      </div>
    </section>
  )
}
