// composables/useBlogFilters.ts
type BlogPost = {
  draft?: boolean
  category?: string
  title: string
  description: string
  tags?: string[]
  date: string | Date
}

export function useBlogFilters(posts: Ref<BlogPost[]>) {
  const searchQuery = ref('')
  const selectedCategory = ref<string | null>(null)
  const sortBy = ref<'date-desc' | 'date-asc' | 'title'>('date-desc')

  const filteredPosts = computed(() => {
    let result = posts.value.filter(p => !p.draft)

    if (selectedCategory.value) {
      if(selectedCategory.value === 'all') {
        selectedCategory.value = null
      }
      result = result.filter(p => p.category === selectedCategory.value)
    }

    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase()
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags?.some(t => t.toLowerCase().includes(q))
      )
    }

    return [...result].sort((a, b) => {
      if (sortBy.value === 'date-desc') return +new Date(b.date) - +new Date(a.date)
      if (sortBy.value === 'date-asc') return +new Date(a.date) - +new Date(b.date)
      return a.title.localeCompare(b.title)
    })
  })

  return { searchQuery, selectedCategory, sortBy, filteredPosts }
}