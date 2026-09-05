<template>
    <div class="border-b border-fixed-border p-5 flex flex-col gap-3">
        <div class="flex text-stronger-interactive-border font-heading gap-5 text-sm">
            <p>{{ date }}</p> .
            <p>{{ t('blog.readTime', { time }) }}</p> .
            <p class="capitalize">{{ category }}</p>
        </div>
        <h1 class="text-primary-text font-heading text-3xl">{{ title }}</h1>
        <p class="text-secondary-text font-body text-base">{{ description }}</p>
        <NuxtLink :to="localePath(`/blog/${slug}`)" class="text-secondary-text hover:text-primary-text text-sm">{{ t('blog.readmore') }}</NuxtLink>
    </div>
</template>

<script setup>
    const { t } = useI18n()
    const localePath = useLocalePath()

    defineProps({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        time: {
            type: Number,
            default: 0
        },
        category: {
            type: String,
            default: ''
        }
    })
</script>