import type Repo from './test-cases/db/github/__types__/Repo'

export const GITHUB_API_TOKEN =
  process.env.GITHUB_API_TOKEN || 'GITHUB_API_TOKEN is not set'

export const REPO: Repo = {
  owner: 'audrow',
  name: 'humble-tcm-example',
}
