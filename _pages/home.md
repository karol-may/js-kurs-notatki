---
layout: page
title: Strona główna
permalink: /
---

# 📘 Kurs JavaScript

Witaj! Poniżej znajdziesz listę lekcji z kursu JavaScript. Kliknij, aby rozpocząć naukę:

---

<ul>
{% assign lessons = site.pages | where_exp: "page", "page.permalink contains '/lessons/'" | sort: "title" %}
{% for lesson in lessons %}
  <li><a href="{{ lesson.permalink }}">{{ lesson.title }}</a></li>
{% endfor %}
</ul>

---

💡 Kurs publikowany przy użyciu [Jekyll](https://jekyllrb.com) i GitHub Pages.
