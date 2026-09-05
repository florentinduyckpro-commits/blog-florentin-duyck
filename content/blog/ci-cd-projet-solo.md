---
title: "Mettre en place une CI/CD légère pour un projet solo"
description: "Pas besoin d'une usine à gaz : ce qui compte vraiment quand on est seul sur un projet SaaS."
date: 2026-05-10
category: devops
tags: ["ci-cd", "github-actions", "deploiement"]
readTime: 4
draft: false
image: "ci-cd-projet-solo.svg"
---

Sur un projet solo, une pipeline CI/CD trop élaborée devient vite plus coûteuse à maintenir que le bug qu'elle est censée éviter.

## Ce qui est indispensable

- Lancer les tests et le linter à chaque push
- Bloquer le merge si le build casse
- Déployer automatiquement la branche principale

Trois étapes, pas plus, suffisent pour la majorité des projets en solo.

## Ce qui peut attendre

Les environnements de preview par pull request, les tests de charge automatisés, les déploiements multi-régions : utiles à partir d'une certaine taille d'équipe ou de trafic, pas avant.

## Le vrai gain

Ce n'est pas la vitesse de déploiement qui compte le plus, c'est la confiance : pouvoir pousser un correctif un soir sans avoir à tout vérifier manuellement avant.
