---
title: "Construire des composants Vue vraiment réutilisables"
description: "Props, slots, provide/inject : les patterns qui évitent de dupliquer du code d'un projet à l'autre."
date: 2026-07-14
category: vuejs
tags: ["vue", "composants", "architecture"]
readTime: 6
draft: false
image: "composants-reutilisables-vue.svg"
---

Un composant "réutilisable" ne l'est souvent que sur le papier. Voici les trois patterns qui font la différence entre un composant qu'on copie-colle et un composant qu'on importe.

## 1. Props avec valeurs par défaut explicites

Ne jamais laisser une prop sans comportement par défaut clair. Un composant qui plante silencieusement parce qu'une prop optionnelle n'a pas été fournie coûte plus cher en debug que le temps gagné à l'écrire vite.

## 2. Slots nommés plutôt que props de contenu

Dès qu'un composant affiche plus qu'un texte simple, préférer un slot nommé à une prop `title` ou `content`. Ça laisse la liberté d'y mettre n'importe quel markup, y compris d'autres composants.

## 3. provide/inject pour l'état partagé local

Pour un groupe de composants imbriqués (un `Tabs` et ses `Tab`, par exemple), `provide`/`inject` évite le prop drilling sans sortir vers un store global — qui serait disproportionné pour un état qui ne vit que le temps d'affichage du composant.

## En résumé

Un bon composant réutilisable se reconnaît à une chose : on peut le déplacer dans un autre projet sans toucher à son code interne, seulement à la façon dont on l'utilise.
