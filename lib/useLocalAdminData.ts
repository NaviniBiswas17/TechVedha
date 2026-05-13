'use client'

import { useEffect, useState } from 'react'
import { ContactSubmission, ManagedProject, STORAGE_KEYS, defaultProjects } from './siteData'

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback

  try {
    const raw = window.localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function writeJson<T>(key: string, value: T) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function useProjects() {
  const [projects, setProjectsState] = useState<ManagedProject[]>(defaultProjects)

  useEffect(() => {
    setProjectsState(readJson(STORAGE_KEYS.projects, defaultProjects))
  }, [])

  const setProjects = (nextProjects: ManagedProject[]) => {
    setProjectsState(nextProjects)
    writeJson(STORAGE_KEYS.projects, nextProjects)
  }

  return { projects, setProjects }
}

export function useContactSubmissions() {
  const [submissions, setSubmissionsState] = useState<ContactSubmission[]>([])

  useEffect(() => {
    setSubmissionsState(readJson(STORAGE_KEYS.contactSubmissions, []))
  }, [])

  const setSubmissions = (nextSubmissions: ContactSubmission[]) => {
    setSubmissionsState(nextSubmissions)
    writeJson(STORAGE_KEYS.contactSubmissions, nextSubmissions)
  }

  return { submissions, setSubmissions }
}

export function saveContactSubmission(submission: ContactSubmission) {
  const current = readJson<ContactSubmission[]>(STORAGE_KEYS.contactSubmissions, [])
  writeJson(STORAGE_KEYS.contactSubmissions, [submission, ...current])
}
