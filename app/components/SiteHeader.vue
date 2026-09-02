<template>
    <header class="bg-secondary-background border border-fixed-border p-5 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-3">
            <h1 class="font-heading text-3xl text-primary-text">{{ $t('blog.name') }}</h1>
        </NuxtLink>
        <nav class="flex items-center gap-5 font-heading text-sm pr-15" aria-label="Navigation principale">
            <NuxtLink to="/" class="text-secondary-text hover:text-primary-text">
                {{ $t('blog.articles') }}
            </NuxtLink>
            <details class="relative group">
                <summary class="cursor-pointer list-none text-secondary-text hover:text-primary-text">
                    {{ $t('blog.categories') }}
                    <span aria-hidden="true">▾</span>
                </summary>
                <ul class="absolute left-0 top-full z-10 mt-2 min-w-40 border border-fixed-border bg-normal-component-background p-2">
                    <li>
                        <NuxtLink to="/?category=" class="block px-3 py-2 text-secondary-text hover:bg-hover-component-background hover:text-primary-text">
                            {{ $t('blog.allArticles') }}
                        </NuxtLink>
                    </li>
                    <li v-for="category in categories" :key="category">
                        <NuxtLink :to="`/?category=${category}`" class="block px-3 py-2 capitalize text-secondary-text hover:bg-hover-component-background hover:text-primary-text">
                            {{ category }}
                        </NuxtLink>
                    </li>
                </ul>
            </details>
        </nav>
    </header>
</template>

<script setup>
const categories = ['vuejs', 'nuxt', 'devops', 'freelance', 'divers']
</script>