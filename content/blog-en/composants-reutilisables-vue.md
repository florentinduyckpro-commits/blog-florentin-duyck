---
title: "Building truly reusable Vue components"
description: "Props, slots, and provide/inject: patterns that prevent code duplication from one project to the next."
date: 2026-07-14
category: vuejs
tags: ["vue", "components", "architecture"]
readTime: 6
draft: false
image: "composants-reutilisables-vue.svg"
---

A "reusable" component often only is on paper. Here are the three patterns that make the difference between a component you copy and paste and one you import.

## 1. Props with explicit default values

Never leave a prop without clear default behavior. A component that fails silently because an optional prop was not provided costs more time to debug than was saved by writing it quickly.

## 2. Named slots instead of content props

As soon as a component displays more than simple text, prefer a named slot over a `title` or `content` prop. It leaves room for any markup, including other components.

## 3. provide/inject for local shared state

For a group of nested components, such as a `Tabs` and its `Tab` components, `provide`/`inject` avoids prop drilling without reaching for a global store. A global store would be excessive for state that only lives while the component is displayed.

## In summary

A good reusable component can be recognized by one thing: you can move it to another project without touching its internal code, only the way you use it.
