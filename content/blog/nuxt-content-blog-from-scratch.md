---
title: "Monter un blog avec Nuxt Content : retour d'expérience"
description: "Ce que j'ai appris en structurant ce blog par catégories, avec recherche et tri côté client."
date: 2026-08-20
category: nuxt
tags: ["nuxt", "nuxt-content", "markdown"]
readTime: 5
draft: false
image: "nuxt-content-blog-from-scratch.svg"
---

Ce blog que tu es en train de lire tourne sur `@nuxt/content`. Pas de CMS externe, pas de base de données : chaque article est un fichier Markdown versionné dans le même repo Git que le reste du portfolio.

## Pourquoi ce choix

Pour un site perso avec un volume d'articles raisonnable, ajouter un CMS headless est souvent une dépendance de trop. Un fichier `.md` se relit, se versionne, et s'édite dans le même éditeur que le code.

## La structure retenue

Tous les articles vivent dans un seul dossier plat `content/blog/`, avec la catégorie définie en frontmatter plutôt qu'en sous-dossier. Ce choix évite de déplacer des fichiers si un article change de catégorie plus tard.

## Filtre, recherche et tri

La collection est chargée une seule fois côté client, puis filtrée dans un composable dédié. Pour le volume d'articles d'un portfolio, ça évite une requête serveur à chaque frappe dans la barre de recherche — l'interface reste instantanée.

## Prochaine étape

Ajouter un flux RSS et un sitemap généré automatiquement à partir de la collection, pour que chaque nouvel article soit indexable sans configuration manuelle.
