<template>
    <div class="w-full sm:w-auto">
        <label for="blog-search" class="sr-only">{{ t('blog.searchLabel') }}</label>
        <input
            id="blog-search"
            v-model="modelValue"
            :placeholder="t('blog.searchPlaceholder')"
            :aria-label="t('blog.searchLabel')"
            class="w-full sm:w-100 border border-fixed-border rounded-md px-3 py-3 text-sm text-primary-text bg-secondary-background focus:outline-none focus:ring-2 focus:ring-primary-text"
        >
    </div>
</template>

<script setup>
    const { t } = useI18n()
    const modelValue = defineModel({
        type: String,
        required: true
    })
</script>
