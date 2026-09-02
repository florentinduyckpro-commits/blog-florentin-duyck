<template>
    <div class="flex flex-col align-item px-100 py-10">
        <h1 class="font-heading text-4xl text-primary-text capitalize">{{ route.query.category || $t('blog.allArticles') }}</h1>
        <ul>
            <li v-for="blogPost in filteredBlogPosts" :key="blogPost.path">
                <BlogCard
                    :title="blogPost.title"
                    :description="blogPost.description"
                    :date="blogPost.date"
                    :slug="getBlogSlug(blogPost.path)"
                    :time="blogPost.readTime"
                    :category="blogPost.category"
                />
                <hr>
            </li>
        </ul>
        <p v-if="filteredBlogPosts.length === 0" class="text-secondary-text font-body">
            Aucun article dans cette catégorie.
        </p>
    </div>
</template>

<script setup>
    const route = useRoute()

    defineProps({
        filteredBlogPosts: {
            type: Array,
            required: true
        }
    })

    const getBlogSlug = (path) => path?.replace(/^\/blog\//, '') || ''
</script>