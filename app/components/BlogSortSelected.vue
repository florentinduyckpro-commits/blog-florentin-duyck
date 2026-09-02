<template>
    <select v-model="selectedSort" selected="date-desc" class=" capitalize font-heading text-secondary-text relative group absolute left-0 top-full z-10 mt-2 min-w-40 border border-fixed-border bg-normal-component-background p-2">
        <option v-for="sort in sorts" :key="sort" :value="sort">
            {{ sort }}
        </option>
    </select>
</template>

<script setup>
    const sorts = ['date-desc', 'date-asc', 'title']
    defineProps({
        sortBy: {
            type: String,
            required: true
        }
    })

    defineEmits(['update:sortBy'])
</script>