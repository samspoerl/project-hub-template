export interface Project {
  name: string
  status: ProjectStatus
  visibility: 'Public' | 'Private'
  url?: string
  gitHubRepoName?: string
  vercelProjectName?: string
}

export type ProjectStatus =
  | 'Backlog'
  | 'Dev'
  | 'MVP'
  | 'Live'
  | 'Archived'
