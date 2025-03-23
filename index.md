---
layout: home
title: Strona główna
---

# Witaj w kursie JavaScript!

## Lekcje

{% for lesson in site.pages %}
  {% if lesson.url contains '/lessons/' %}
  - [{{ lesson.title }}]({{ lesson.url }})
  {% endif %}
{% endfor %}
