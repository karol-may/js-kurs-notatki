## Lista lekcji

{% for page in site.pages %}
{% if page.path contains 'docs/' and page.title %}
- [{{ page.title }}]({{ page.url }}) – {{ page.description }}
  {% endif %}
{% endfor %}