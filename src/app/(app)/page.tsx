import PageWrapper from '@/components/PageWrapper'
import { Heading } from '@/components/ui/heading'
import { projects as staticProjects } from '@/lib/data'
import { Project } from '@/lib/types'
import { get } from '@vercel/edge-config'
import { ProjectList } from './ui/ProjectList'

export default async function Page() {
  let projects: Project[] | undefined
  if (process.env.USE_EDGE_CONFIG === 'true') {
    projects = await get('allProjects')
  } else {
    projects = staticProjects
  }

  return (
    <PageWrapper>
      <Heading level="h2" className="mx-auto">
        Projects
      </Heading>
      {projects && <ProjectList projects={projects} />}
    </PageWrapper>
  )
}
