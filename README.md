# pagination
Plugin with JQuery

Плагин для постраничной навигации списков

(Для использования необходим JQuery)

Параметры инициализации:

navigations - блок в который будут вложены кнопки страниц (по умолчанию '.button-bar')

per_page - количество записей на одной странице (по умолчанию 25)

searchInput - текстовое поле для фильтрации списка (по умолчанию '#search')

Все параметры являются необязательными

Пример использования

 <input id="search" placeholder="Поиск" />
 <ol class="list">
   <li>Пункт 1</li>
   <li>Пункт 2</li>
   <li>Пункт 3</li>
   <li>Пункт 4</li>  
   <li>Пункт 5</li>
 </ol>
 <ul class="button-bar"></ul>

 <script>
   $('.list').pagination({
      per_page:2
   });
 </script>
