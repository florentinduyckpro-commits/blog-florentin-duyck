<template>
    <div>
        <div class="flex items-center gap-4 px-150 py-10">
            <BlogSearchBar v-model="searchQuery" />
            <BlogSortSelected v-model="sortBy" />
        </div>

        <BlogList :filtered-blog-posts="filteredPosts" />
    </div>
</template>

<script setup>
    const route = useRoute()
    const { data: blogPosts } = await useAsyncData('blog-list', () => queryCollection('blog').order('date', 'DESC').all())
    const { searchQuery, selectedCategory, filteredPosts,sortBy } = useBlogFilters(blogPosts)

    watch(() => route.query.category, (category) => {
        selectedCategory.value = typeof category === 'string' ? category : null
    }, { immediate: true })
</script>