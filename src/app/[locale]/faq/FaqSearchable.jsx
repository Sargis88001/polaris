'use client'

import React, { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import Accordion from '@/components/ui/Accordion'
import { SearchSection, SearchInner, SearchField, Group, Empty } from './style.js'

export default function FaqSearchable({ groups, searchPlaceholder, emptyState }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return groups
    const q = query.trim().toLowerCase()
    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (it) =>
            it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.items.length > 0)
  }, [groups, query])

  const isEmpty = filtered.length === 0

  return (
    <SearchSection>
      <SearchInner>
        <SearchField>
          <Search size={18} aria-hidden="true" />
          <input
            type="search"
            placeholder={searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={searchPlaceholder}
          />
        </SearchField>

        {isEmpty && <Empty>{emptyState}</Empty>}

        {!isEmpty &&
          filtered.map((g) => (
            <Group key={g.id}>
              <h2>{g.title}</h2>
              <Accordion
                items={g.items.map((it, idx) => ({
                  id: `${g.id}-${idx}`,
                  q: it.q,
                  a: it.a,
                }))}
              />
            </Group>
          ))}
      </SearchInner>
    </SearchSection>
  )
}
