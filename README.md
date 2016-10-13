# pagination
Plugin with JQuery

Плагин для постраничной навигации списков

(Для использования необходим JQuery)

Параметры инициализации:
<pre>
<strong>navigations</strong> - блок в который будут вложены кнопки страниц (по умолчанию '.button-bar')
<strong>per_page</strong> - количество записей на одной странице (по умолчанию 25)
<strong>searchInput</strong> - текстовое поле для фильтрации списка (по умолчанию '#search')
</pre>

Все параметры являются необязательными

Пример использования
<code>
   $('.list').pagination({
      per_page:2
   });
</code>
