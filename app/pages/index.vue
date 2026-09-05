<template>
    <div>
        <div v-if="route.query.category != null" class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-10">
            <BlogSearchBar v-model="searchQuery" />
            <BlogSortSelected v-model:sort-by="sortBy" />
        </div>

        <BlogList :filtered-blog-posts="filteredPosts" />
    </div>
</template>

<script setup>
    const route = useRoute()
    const { locale, t } = useI18n()
    useSeoMeta({
        title: () => t('blog.name'),
        description: () => t('blog.seoDescription'),
        ogTitle: () => t('blog.name'),
        ogDescription: () => t('blog.seoDescription'),
        ogType: 'website',
        twitterCard: 'summary'
    })
    const { data: blogPosts } = await useAsyncData('blog-list', () => {
        const collection = locale.value === 'en' ? queryCollection('blogEn') : queryCollection('blog')
        return collection.order('date', 'DESC').all()
    }, { watch: [locale] })
    const { searchQuery, selectedCategory, filteredPosts,sortBy } = useBlogFilters(blogPosts)

    watch(() => route.query.category, (category) => {
        selectedCategory.value = typeof category === 'string' ? category : null
        if (category == null) {
            searchQuery.value = ''
        }
    }, { immediate: true })
</script>