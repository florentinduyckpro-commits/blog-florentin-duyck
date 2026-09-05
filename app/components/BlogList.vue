<template>
    <div class="flex flex-col align-item w-full max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-10">
        <h1 class="font-heading text-4xl text-primary-text capitalize">{{ route.query.category === 'all' ? $t('blog.allArticles') : route.query.category }}</h1>
        <div v-if="route.query.category == null" class="flex justify-center border border-fixed-border rounded-s aspect-video w-full max-w-190 background-custom">
            <img class="h-full w-full object-cover" :src="filteredBlogPosts[0]?.image ? `/blog-image-${locale}/${filteredBlogPosts[0].image}` : ''" :alt="filteredBlogPosts[0]?.title || 'Blog'">
        </div>
        <h1  v-if="route.query.category == null" class="font-heading text-4xl text-primary-text capitalize py-5">{{ $t('blog.lastArticles') }}</h1>
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
            {{ $t('blog.notfound') }}
        </p>
    </div>
</template>

<script setup>
    const { locale } = useI18n()
    const route = useRoute()

    defineProps({
        filteredBlogPosts: {
            type: Array,
            required: true
        }
    })

    const getBlogSlug = (path) => path?.split('/').pop() || ''
</script>

<style scoped>
    .background-custom{
        background-color: #301C3B;
        background-image: repeating-linear-gradient(135deg, rgba(132,87,170,0.22) 0 1px, transparent 1px 9px);
    }   
</style>