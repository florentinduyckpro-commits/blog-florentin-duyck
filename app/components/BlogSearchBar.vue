<template>
    <div>
        <label for="blog-search" class="sr-only">Search blog posts</label>
        <input
            id="blog-search"
            v-model="modelValue"
            placeholder="Search blog posts..."
            aria-label="Search blog posts"
            class="w-100 border border-fixed-border rounded-md px-3 py-3 text-sm text-primary-text bg-secondary-background focus:outline-none focus:ring-2 focus:ring-primary-text"
        >
    </div>
</template>

<script setup>
    const modelValue = defineModel({
        type: String,
        required: true
    })
</script>
