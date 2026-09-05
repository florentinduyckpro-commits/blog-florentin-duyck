<template>
    <header class="bg-secondary-background border border-fixed-border p-4 sm:p-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
            <h1 class="font-heading text-2xl sm:text-3xl text-primary-text text-center sm:text-left">{{ $t('blog.name') }}</h1>
        </NuxtLink>
        <nav class="flex flex-wrap items-center justify-center gap-3 sm:gap-5 font-heading text-sm sm:pr-15" aria-label="Navigation principale">
            <NuxtLink :to="localePath({ path: '/', query: { category: 'all' } })" class="text-secondary-text hover:text-primary-text">
                {{ $t('blog.articles') }}
            </NuxtLink>
            <details class="relative group">
                <summary class="cursor-pointer list-none text-secondary-text hover:text-primary-text">
                    {{ $t('blog.categories') }}
                    <span aria-hidden="true">▾</span>
                </summary>
                <ul class="absolute left-0 top-full z-10 mt-2 min-w-40 border border-fixed-border bg-normal-component-background p-2">
                    <li>
                        <NuxtLink :to="localePath({ path: '/', query: { category: 'all' } })" class="block px-3 py-2 text-secondary-text hover:bg-hover-component-background hover:text-primary-text">
                            {{ $t('blog.allArticles') }}
                        </NuxtLink>
                    </li>
                    <li v-for="category in categories" :key="category">
                        <NuxtLink :to="localePath({ path: '/', query: { category } })" class="block px-3 py-2 capitalize text-secondary-text hover:bg-hover-component-background hover:text-primary-text">
                            {{ category }}
                        </NuxtLink>
                    </li>
                </ul>
            </details>
            <button
                type="button"
                class="border border-fixed-border px-3 py-1 text-secondary-text hover:bg-hover-component-background hover:text-primary-text"
                :aria-label="$t(`blog.switchTo${locale === 'fr' ? 'English' : 'French'}`)"
                @click="toggleLocale"
            >
                {{ locale === 'fr' ? 'EN' : 'FR' }}
            </button>
        </nav>
    </header>
</template>

<script setup>
const categories = ['vuejs', 'nuxt', 'devops', 'freelance', 'divers']
const { locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const toggleLocale = () => {
    const nextLocale = locale.value === 'fr' ? 'en' : 'fr'
    return navigateTo(switchLocalePath(nextLocale))
}
</script>