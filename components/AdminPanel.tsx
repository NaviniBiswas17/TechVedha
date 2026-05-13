'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  BarChart3,
  Briefcase,
  CheckCircle2,
  Edit3,
  Eye,
  EyeOff,
  FileText,
  Folder,
  Grid2X2,
  Image as ImageIcon,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Plus,
  Save,
  Shield,
  Star,
  Trash2,
  X,
} from 'lucide-react'
import { isAdminLoggedIn, logoutAdmin } from '@/lib/adminAuth'
import { createEmptyProject, ManagedProject, ProjectMetricIcon } from '@/lib/siteData'
import { useContactSubmissions, useProjects } from '@/lib/useLocalAdminData'

type AdminPage = 'overview' | 'projects' | 'blog' | 'testimonials' | 'careers' | 'contacts'

const metricIcons: ProjectMetricIcon[] = ['trending', 'clock', 'dollar', 'shield']

const sidebarItems: Array<{ key: AdminPage; label: string; icon: typeof Grid2X2 }> = [
  { key: 'overview', label: 'Overview', icon: Grid2X2 },
  { key: 'projects', label: 'Projects', icon: Folder },
  { key: 'blog', label: 'Blog', icon: FileText },
  { key: 'testimonials', label: 'Testimonials', icon: Star },
  { key: 'careers', label: 'Careers', icon: Briefcase },
  { key: 'contacts', label: 'Contacts', icon: Mail },
]

export default function AdminPanel() {
  const router = useRouter()
  const { projects, setProjects } = useProjects()
  const { submissions, setSubmissions } = useContactSubmissions()
  const [activePage, setActivePage] = useState<AdminPage>('overview')
  const [editingProject, setEditingProject] = useState<ManagedProject | null>(null)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      router.replace('/admin/login')
      return
    }

    setIsCheckingAuth(false)
  }, [router])

  const publishedProjects = useMemo(() => projects.filter((project) => project.published), [projects])
  const newSubmissions = useMemo(
    () => submissions.filter((submission) => submission.status === 'new'),
    [submissions]
  )

  const saveProject = () => {
    if (!editingProject) return

    const cleanProject = {
      ...editingProject,
      client: editingProject.client.trim(),
      industry: editingProject.industry.trim(),
      challenge: editingProject.challenge.trim(),
      solution: editingProject.solution.trim(),
      quote: editingProject.quote.trim(),
      author: editingProject.author.trim(),
    }

    const exists = projects.some((project) => project.id === cleanProject.id)
    setProjects(
      exists
        ? projects.map((project) => (project.id === cleanProject.id ? cleanProject : project))
        : [cleanProject, ...projects]
    )
    setEditingProject(null)
  }

  const deleteProject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id))
    if (editingProject?.id === id) setEditingProject(null)
  }

  const togglePublished = (id: string) => {
    setProjects(
      projects.map((project) => (project.id === id ? { ...project, published: !project.published } : project))
    )
  }

  const updateSubmissionStatus = (id: string, status: 'new' | 'contacted' | 'closed') => {
    setSubmissions(submissions.map((submission) => (submission.id === id ? { ...submission, status } : submission)))
  }

  const deleteSubmission = (id: string) => {
    setSubmissions(submissions.filter((submission) => submission.id !== id))
  }

  const handleLogout = () => {
    logoutAdmin()
    router.replace('/admin/login')
  }

  if (isCheckingAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white text-gray-900">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-gray-200 border-t-green-500" />
          <p className="text-sm text-gray-500">Checking admin access...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="h-screen overflow-hidden bg-gray-50 text-gray-950">
      <div className="flex h-screen overflow-hidden">
        <aside className="fixed inset-y-0 left-0 z-20 hidden w-[260px] border-r border-gray-200 bg-white lg:flex lg:flex-col">
          <div className="px-6 pb-5 pt-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 text-white">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xl font-bold leading-none">InnovaIT</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-green-500">Admin</p>
              </div>
            </div>
            <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.16em] text-gray-400">Admin Panel</p>
          </div>

          <nav className="flex-1 space-y-1 px-3">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              const isActive = activePage === item.key
              return (
                <button
                  key={item.key}
                  onClick={() => setActivePage(item.key)}
                  className={`relative flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                    isActive ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                  {isActive && <span className="absolute right-0 top-2 h-10 w-0.5 rounded-full bg-green-500" />}
                </button>
              )
            })}
          </nav>

          <div className="px-6 py-6">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </aside>

        <section className="flex h-screen w-full flex-col overflow-hidden lg:pl-[260px]">
          <MobileTopbar activePage={activePage} setActivePage={setActivePage} onLogout={handleLogout} />

          <div className="mx-auto flex min-h-0 w-full max-w-[1600px] flex-1 flex-col overflow-hidden px-4 py-6 sm:px-6 lg:px-6">
            {activePage === 'overview' && (
              <OverviewPage
                projects={projects}
                publishedProjects={publishedProjects.length}
                submissions={submissions}
                newSubmissions={newSubmissions.length}
                setActivePage={setActivePage}
              />
            )}

            {activePage === 'projects' && (
              <ProjectsPage
                projects={projects}
                editingProject={editingProject}
                setEditingProject={setEditingProject}
                saveProject={saveProject}
                deleteProject={deleteProject}
                togglePublished={togglePublished}
              />
            )}

            {activePage === 'contacts' && (
              <ContactsPage
                submissions={submissions}
                updateSubmissionStatus={updateSubmissionStatus}
                deleteSubmission={deleteSubmission}
              />
            )}

            {activePage === 'blog' && (
              <PlaceholderPage
                title="Blog"
                subtitle="Manage articles, drafts, categories, and published posts."
                action="Add Blog"
              />
            )}

            {activePage === 'testimonials' && (
              <PlaceholderPage
                title="Testimonials"
                subtitle="Manage client reviews and choose which testimonials appear on the website."
                action="Add Testimonial"
              />
            )}

            {activePage === 'careers' && (
              <PlaceholderPage
                title="Careers"
                subtitle="Manage job openings and review career applications."
                action="Add Opening"
              />
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

function MobileTopbar({
  activePage,
  setActivePage,
  onLogout,
}: {
  activePage: AdminPage
  setActivePage: (page: AdminPage) => void
  onLogout: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  const openPage = (page: AdminPage) => {
    setActivePage(page)
    setIsOpen(false)
  }

  return (
    <div className="sticky top-0 z-30 border-b border-gray-200 bg-white px-4 py-3 lg:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500 text-white">
            <Shield className="h-5 w-5" />
          </div>
          <span className="font-bold">InnovaIT Admin</span>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
          aria-label="Open admin menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setIsOpen(false)}>
          <aside
            className="h-full w-[280px] max-w-[86vw] bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500 text-white">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">InnovaIT</p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-green-500">Admin</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-50"
                aria-label="Close admin menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="space-y-1 px-3 py-4">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                const isActive = activePage === item.key

                return (
                  <button
                    key={item.key}
                    onClick={() => openPage(item.key)}
                    className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                      isActive ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </button>
                )
              })}
            </nav>

            <div className="absolute bottom-0 left-0 w-[280px] max-w-[86vw] border-t border-gray-100 p-4">
              <button
                onClick={onLogout}
                className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

function OverviewPage({
  projects,
  publishedProjects,
  submissions,
  newSubmissions,
  setActivePage,
}: {
  projects: ManagedProject[]
  publishedProjects: number
  submissions: ReturnType<typeof useContactSubmissions>['submissions']
  newSubmissions: number
  setActivePage: (page: AdminPage) => void
}) {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto pr-1">
      <PageHeader title="Overview" subtitle="Live snapshot of InnovaIT." />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Folder} label="Total Projects" value={String(projects.length)} badge={`${publishedProjects} live`} />
        <StatCard icon={FileText} label="Published Blogs" value="0" badge="0 total" tone="green" />
        <StatCard icon={Briefcase} label="Job Applications" value="0" badge="0 fulltime" tone="green" />
        <StatCard icon={ImageIcon} label="Enquiries" value={String(submissions.length)} badge={`${newSubmissions} projects`} />
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-[2fr_1fr]">
        <Panel
          title="Recent Enquiries"
          subtitle="Latest contact form submissions"
          action="View All"
          onAction={() => setActivePage('contacts')}
        >
          <RecentSubmissions submissions={submissions.slice(0, 3)} />
        </Panel>

        <Panel title="Content Health">
          <div className="space-y-5">
            <HealthRow label="Blogs Published" value="0/0" percent={0} />
            <HealthRow label="Active Testimonials" value="0/0" percent={0} />
            <HealthRow label="Live Projects" value={`${publishedProjects}/${projects.length}`} percent={projects.length ? (publishedProjects / projects.length) * 100 : 0} />
            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
              <MiniMetric value="0" label="Testimonials" />
              <MiniMetric value="0" label="Drafts" />
            </div>
          </div>
        </Panel>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-2">
        <Panel title="Recent Applications" subtitle="Latest career submissions" action="View All" onAction={() => setActivePage('careers')}>
          <EmptyRows label="No career applications yet" />
        </Panel>
        <Panel title="Recent Projects" subtitle="Latest portfolio entries" action="View All" onAction={() => setActivePage('projects')}>
          <div className="space-y-4">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <img src={project.image} alt={project.client} className="h-10 w-10 rounded-lg object-cover" />
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-gray-950">{project.client}</p>
                    <p className="text-sm text-gray-400">{project.industry}</p>
                  </div>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-600">
                  {project.published ? 'Live' : 'Draft'}
                </span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  )
}

function ProjectsPage({
  projects,
  editingProject,
  setEditingProject,
  saveProject,
  deleteProject,
  togglePublished,
}: {
  projects: ManagedProject[]
  editingProject: ManagedProject | null
  setEditingProject: (project: ManagedProject | null) => void
  saveProject: () => void
  deleteProject: (id: string) => void
  togglePublished: (id: string) => void
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <PageHeader
        title="Projects"
        subtitle="Manage portfolio projects and case studies."
        action={
          <button
            onClick={() => setEditingProject(createEmptyProject())}
            className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-3.5 py-2.5 text-sm font-bold text-white hover:bg-green-600"
          >
            <Plus className="h-4 w-4" />
            Add Project
          </button>
        }
      />

      <div className="grid min-h-0 flex-1 gap-5 overflow-hidden xl:grid-cols-[minmax(0,1fr)_430px]">
        <div className="h-full min-h-0 overflow-y-auto pr-1">
          <div className="grid gap-4 pb-2">
          {projects.map((project) => (
            <article key={project.id} className="h-[190px] overflow-hidden rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex h-full gap-4">
                <img src={project.image} alt={project.client} className="hidden h-full w-44 flex-shrink-0 rounded-lg object-cover sm:block lg:w-52" />
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-xs font-bold uppercase tracking-wider text-green-600">
                        {project.industry || 'Uncategorized'}
                      </span>
                      <h2 className="mt-1 truncate text-lg font-bold text-gray-950">{project.client || 'Untitled Project'}</h2>
                    </div>
                    <span className={`flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold ${project.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {project.published ? 'Published' : 'Hidden'}
                    </span>
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-500">{project.challenge}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    <AdminButton onClick={() => setEditingProject(project)} icon={Edit3} label="Edit" />
                    <AdminButton onClick={() => togglePublished(project.id)} icon={project.published ? EyeOff : Eye} label={project.published ? 'Hide' : 'Publish'} />
                    <AdminButton onClick={() => deleteProject(project.id)} icon={Trash2} label="Delete" danger />
                  </div>
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>

        <ProjectEditor project={editingProject} onChange={setEditingProject} onSave={saveProject} />
      </div>
    </div>
  )
}

function ContactsPage({
  submissions,
  updateSubmissionStatus,
  deleteSubmission,
}: {
  submissions: ReturnType<typeof useContactSubmissions>['submissions']
  updateSubmissionStatus: (id: string, status: 'new' | 'contacted' | 'closed') => void
  deleteSubmission: (id: string) => void
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <PageHeader title="Contacts" subtitle="Review and manage contact form submissions." />
      <div className="min-h-0 flex-1 overflow-y-auto pr-1">
        <div className="grid gap-4 pb-2">
        {submissions.length === 0 ? (
          <EmptyState icon={Mail} title="No contact submissions yet" text="Messages sent from the public contact form will appear here." />
        ) : (
          submissions.map((submission) => (
            <article key={submission.id} className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Avatar text={`${submission.firstName} ${submission.lastName}`} />
                    <div>
                      <h2 className="text-base font-bold text-gray-950">
                        {submission.firstName} {submission.lastName}
                      </h2>
                      <p className="text-sm text-gray-400">{submission.email}</p>
                    </div>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">{submission.status}</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-gray-700">{submission.service}</p>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">{submission.message}</p>
                  <p className="mt-3 text-xs text-gray-400">{new Date(submission.createdAt).toLocaleString()}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(['new', 'contacted', 'closed'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => updateSubmissionStatus(submission.id, status)}
                      className={`rounded-lg px-3 py-2 text-xs font-bold ${
                        submission.status === status ? 'bg-green-500 text-white' : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                  <button onClick={() => deleteSubmission(submission.id)} className="rounded-lg border border-red-100 px-3 py-2 text-xs font-bold text-red-500 hover:bg-red-50">
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))
        )}
        </div>
      </div>
    </div>
  )
}

function PlaceholderPage({ title, subtitle, action }: { title: string; subtitle: string; action: string }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <PageHeader
        title={title}
        subtitle={subtitle}
        action={
          <button className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-3.5 py-2.5 text-sm font-bold text-white opacity-60">
            <Plus className="h-4 w-4" />
            {action}
          </button>
        }
      />
      <EmptyState icon={MessageSquare} title={`${title} module ready`} text="The page is in the admin sidebar. We can connect its CRUD data model next." />
    </div>
  )
}

function PageHeader({ title, subtitle, action }: { title: string; subtitle: string; action?: React.ReactNode }) {
  return (
    <header className="mb-5 flex flex-shrink-0 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-950">{title}</h1>
        <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
      </div>
      {action}
    </header>
  )
}

function StatCard({
  icon: Icon,
  label,
  value,
  badge,
  tone,
}: {
  icon: typeof Folder
  label: string
  value: string
  badge: string
  tone?: 'green'
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50">
          <Icon className="h-5 w-5 text-green-500" />
        </div>
        <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-600">
          {badge}
        </span>
      </div>
      <p className="text-xs font-bold text-gray-400">{label}</p>
      <p className="mt-2 text-2xl font-bold text-gray-950">{value}</p>
    </div>
  )
}

function Panel({
  title,
  subtitle,
  action,
  onAction,
  children,
}: {
  title: string
  subtitle?: string
  action?: string
  onAction?: () => void
  children: React.ReactNode
}) {
  return (
    <section className="min-h-[220px] rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-gray-950">{title}</h2>
          {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
        </div>
        {action && (
          <button onClick={onAction} className="text-sm font-semibold text-green-600 hover:text-green-700">
            {action}
          </button>
        )}
      </div>
      {children}
    </section>
  )
}

function RecentSubmissions({ submissions }: { submissions: ReturnType<typeof useContactSubmissions>['submissions'] }) {
  if (submissions.length === 0) return <EmptyRows label="No enquiries yet" />

  return (
    <div className="space-y-7">
      {submissions.map((submission) => (
        <div key={submission.id} className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <Avatar text={`${submission.firstName} ${submission.lastName}`} />
            <div className="min-w-0">
              <p className="truncate font-semibold text-gray-950">
                {submission.firstName} {submission.lastName}
              </p>
              <p className="truncate text-sm text-gray-400">{submission.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-600">{submission.service}</span>
            <span className="text-sm text-gray-400">{new Date(submission.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function HealthRow({ label, value, percent }: { label: string; value: string; percent: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-gray-700">{label}</span>
        <span className="font-bold text-gray-950">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
        <div className="h-full rounded-full bg-green-500" style={{ width: `${Math.min(percent, 100)}%` }} />
      </div>
    </div>
  )
}

function MiniMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-gray-50 p-5 text-center">
      <p className="text-xl font-bold text-gray-950">{value}</p>
      <p className="mt-1 text-xs text-gray-400">{label}</p>
    </div>
  )
}

function EmptyRows({ label }: { label: string }) {
  return <p className="py-8 text-center text-sm text-gray-400">{label}</p>
}

function Avatar({ text }: { text: string }) {
  const initials = text
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

  return (
    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
      {initials || 'A'}
    </div>
  )
}

function EmptyState({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Mail
  title: string
  text: string
}) {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
      <Icon className="mx-auto h-10 w-10 text-gray-400" />
      <h2 className="mt-3 text-base font-bold text-gray-950">{title}</h2>
      <p className="mt-2 text-sm text-gray-500">{text}</p>
    </div>
  )
}

function AdminButton({
  onClick,
  icon: Icon,
  label,
  danger,
}: {
  onClick: () => void
  icon: typeof Edit3
  label: string
  danger?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold ${
        danger ? 'border-red-100 text-red-500 hover:bg-red-50' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  )
}

function ProjectEditor({
  project,
  onChange,
  onSave,
}: {
  project: ManagedProject | null
  onChange: (project: ManagedProject | null) => void
  onSave: () => void
}) {
  if (!project) {
    return (
      <aside className="h-[190px] rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-gray-400" />
        <h2 className="mt-3 text-base font-bold text-gray-950">Select a project to edit</h2>
        <p className="mt-2 text-sm text-gray-500">Use Add Project or Edit to manage case studies shown on the website.</p>
      </aside>
    )
  }

  return (
    <aside className="max-h-full overflow-y-auto rounded-xl border border-gray-200 bg-white p-5">
      <h2 className="text-base font-bold text-gray-950">Project Details</h2>
      <div className="mt-5 grid gap-4">
        <TextField label="Client" value={project.client} onChange={(client) => onChange({ ...project, client })} />
        <TextField label="Industry" value={project.industry} onChange={(industry) => onChange({ ...project, industry })} />
        <TextField label="Image URL" value={project.image} onChange={(image) => onChange({ ...project, image })} />
        <TextArea label="Challenge" value={project.challenge} onChange={(challenge) => onChange({ ...project, challenge })} />
        <TextArea label="Solution" value={project.solution} onChange={(solution) => onChange({ ...project, solution })} />
        <TextArea label="Quote" value={project.quote} onChange={(quote) => onChange({ ...project, quote })} />
        <TextField label="Author" value={project.author} onChange={(author) => onChange({ ...project, author })} />

        <div>
          <label className="mb-2 block text-xs font-bold text-gray-700">Result Metrics</label>
          <div className="grid gap-3">
            {project.results.map((metric, index) => (
              <div key={index} className="grid grid-cols-[96px_minmax(0,1fr)] gap-2 rounded-xl border border-gray-200 p-3">
                <select
                  value={metric.icon}
                  onChange={(event) => {
                    const next = [...project.results]
                    next[index] = { ...metric, icon: event.target.value as ProjectMetricIcon }
                    onChange({ ...project, results: next })
                  }}
                  className="rounded-lg border border-gray-200 px-2 py-2 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                >
                  {metricIcons.map((icon) => (
                    <option key={icon} value={icon}>
                      {icon}
                    </option>
                  ))}
                </select>
                <div className="grid gap-2 sm:grid-cols-2">
                  <input
                    value={metric.value}
                    onChange={(event) => {
                      const next = [...project.results]
                      next[index] = { ...metric, value: event.target.value }
                      onChange({ ...project, results: next })
                    }}
                    placeholder="Value"
                    className="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />
                  <input
                    value={metric.label}
                    onChange={(event) => {
                      const next = [...project.results]
                      next[index] = { ...metric, label: event.target.value }
                      onChange({ ...project, results: next })
                    }}
                    placeholder="Label"
                    className="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <label className="flex items-center gap-3 rounded-xl border border-gray-200 p-3 text-sm font-bold text-gray-700">
          <input
            type="checkbox"
            checked={project.published}
            onChange={(event) => onChange({ ...project, published: event.target.checked })}
            className="h-4 w-4 accent-green-500"
          />
          Published on website
        </label>

        <div className="flex gap-3">
          <button
            onClick={onSave}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-500 px-3.5 py-2.5 text-sm font-bold text-white hover:bg-green-600"
          >
            <Save className="h-4 w-4" />
            Save Project
          </button>
          <button
            onClick={() => onChange(null)}
            className="rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  )
}

function TextField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold text-gray-700">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
      />
    </label>
  )
}

function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold text-gray-700">{label}</span>
      <textarea
        value={value}
        rows={3}
        onChange={(event) => onChange(event.target.value)}
        className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
      />
    </label>
  )
}
