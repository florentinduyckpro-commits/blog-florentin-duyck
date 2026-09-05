<template>
    <label for="blog-sort" class="sr-only">Sort posts</label>
    <select id="blog-sort" v-model="sortBy" class="capitalize font-heading text-secondary-text relative group absolute left-0 top-full z-10 mt-2 min-w-40 border border-fixed-border bg-normal-component-background p-2">
        <option v-for="sort in sorts" :key="sort" :value="sort">
            {{ sort }}
        </option>
    </select>
</template>

<script setup>
    const sorts = ['date-desc', 'date-asc', 'title']
    const sortBy = defineModel('sortBy', {
        type: String,
        required: true
    })
</script>