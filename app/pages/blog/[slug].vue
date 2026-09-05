<template>
    <div class="flex flex-col gap-5 w-full max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-10">
        <div>
            <div class="flex text-stronger-interactive-border font-heading gap-5 text-sm">
                <p>{{ blogPost.date }}</p> .
                <p>{{ $t('blog.readTime', { time: blogPost.readTime }) }}</p>
            </div>
        </div>
        <h1 class="text-4xl font-heading text-primary-text">{{ blogPost.title }}</h1>
        <p class="text-secondary-text font-body border-l-2 border-fixed-border pl-4 text-lg">{{ blogPost.description }}</p>
        <div class="flex justify-center border border-fixed-border rounded-s aspect-video w-full max-w-190 background-custom">
            <img class="h-full w-full object-cover" :src="blogPost.image ? `/blog-image-${locale}/${blogPost.image}` : ''" :alt="blogPost.title">
        </div>
        <article class="blog-content font-body">
            <ContentRenderer :value="blogPost" />
        </article>
        <div class="flex gap-3">
            <div v-for="tag in blogPost.tags" :key="tag" class="border border-fixed-border rounded-sm text-secondary-text font-heading px-2 py-1 text-xs inline-block flex">
                #{{ tag }}
            </div>
        </div>
    </div>
</template>

<script setup>
    const route = useRoute()
    const { locale } = useI18n()
    const articleSlug = route.params.slug
    const { data: blogPost } = await useAsyncData(route.path, () => {
        const collection = locale.value === 'en' ? queryCollection('blogEn') : queryCollection('blog')
        const articlePath = `/${locale.value === 'en' ? 'blog-en' : 'blog'}/${articleSlug}`
        return collection.path(articlePath).first()
    }, { watch: [locale] })
    useSeoMeta({
        title: () => blogPost.value?.title || '',
        description: () => blogPost.value?.description || '',
        ogTitle: () => blogPost.value?.title || '',
        ogDescription: () => blogPost.value?.description || '',
        ogType: 'article',
        ogImage: () => blogPost.value?.image ? `/blog-image-${locale.value}/${blogPost.value.image}` : undefined,
        articlePublishedTime: () => blogPost.value?.date ? new Date(blogPost.value.date).toISOString() : undefined,
        articleSection: () => blogPost.value?.category || undefined,
        articleTag: () => blogPost.value?.tags || undefined,
        twitterCard: 'summary_large_image'
    })

    useHead(() => {
        const post = blogPost.value
        if (!post) return {}

        return {
            script: [{
                type: 'application/ld+json',
                children: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    headline: post.title,
                    description: post.description,
                    datePublished: new Date(post.date).toISOString(),
                    author: {
                        '@type': 'Person',
                        name: 'Florentin Duyck'
                    },
                    image: post.image ? `/blog-image-${locale.value}/${post.image}` : undefined
                })
            }]
        }
    })
</script>

<style scoped>
.blog-content :deep(h2) {
    margin: 10px 0 0;
    color: #ECD9FA;
    font-size: 22px;
    font-weight: 700;
}

.blog-content :deep(p) {
    margin: 0;
    color: #ECD9FA;
    font-size: 16px;
    line-height: 1.85;
}

.blog-content :deep(ul),
.blog-content :deep(ol) {
    margin: 0.75rem 0 0.75rem 1.5rem;
    padding-left: 1rem;
    color: #ECD9FA;
    font-size: 16px;
    line-height: 1.85;
}

.blog-content :deep(li) {
    margin: 0.35rem 0;
    color: #ECD9FA;
    position: relative;
}

.blog-content :deep(ul li::marker) {
    color: #D19DFF;
    font-size: 1.2rem;
}

.blog-content :deep(ol li::marker) {
    color: #D19DFF;
    font-weight: 700;
}

.blog-content :deep(ul > li::before) {
    content: "";
    position: absolute;
    left: -1.1rem;
    top: 0.7em;
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 9999px;
    background: #8E4EC6;
}

.blog-content :deep(code) {
  background: rgba(255,255,255,0.08);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
}

.blog-content :deep(pre) {
  background: #1e1523;
  padding: 1rem;
  overflow-x: auto;
  border-radius: 0.5rem;
}

.background-custom{
    background-color: #301C3B;
    background-image: repeating-linear-gradient(135deg, rgba(132,87,170,0.22) 0 1px, transparent 1px 9px);
}
</style>