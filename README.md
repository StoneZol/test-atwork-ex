# Тестовое задание для Frontend

## Описание проекта
Данный проект представляет собой двухстраничное приложение на **React**, использующее **Redux Toolkit** и **React Router v6** для управления состоянием и роутингом. Приложение позволяет отображать список пользователей с возможностью редактирования их данных, а также архивирования и скрытия карточек.

### Задание:
- Отобразить список пользователей, получаемых с публичного API: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) (первые 6 пользователей).
- Реализовать функционал для редактирования пользователей, архивирования и скрытия карточек.
- Приложение состоит из двух страниц: главной страницы и страницы редактирования пользователя.

## Основные функциональные возможности:
### Главная страница:
- Получение и отображение первых 6 пользователей с API.
- Каждая карточка пользователя содержит:
  - **Username**
  - **City**
  - **Company Name**
  - **Аватарка** (любая картинка)
- Взаимодействие с карточками:
  - **Редактировать** — открывает страницу редактирования.
  - **Архивировать** — переносит карточку в архив.
  - **Скрыть** — убирает карточку из списка.
- Возможность восстановить карточку из архива.
- Показ **loader** во время загрузки данных.

### Страница редактирования:
- Отображение и редактирование следующих данных:
  - **Name**
  - **Username**
  - **Email**
  - **City**
  - **Phone**
  - **Company Name**
  - **Аватарка** (любая картинка)
- Валидация: все поля обязательны для заполнения.
- Кнопка "Сохранить" с валидацией. При успешной валидации появляется **попап** с сообщением об успешном сохранении.
- Попап автоматически закрывается через 4 секунды или вручную нажатием на крестик.
- При перезагрузке страницы данные могут сбрасываться.

## Использованные технологии
- **React** — библиотека для создания интерфейсов.
- **Redux Toolkit** — для управления состоянием приложения.
- **React Router v6** — для навигации между страницами.
- **JavaScript (ES6+)** — основной язык программирования.
- **CSS** — для стилизации компонентов.

## Установка и запуск проекта

### 1. Клонирование репозитория
```bash
git clone https://github.com/ваш-репозиторий
cd ваш-репозиторий
```

### 2. Установка зависимостей
Для установки всех зависимостей используйте команду:
```bash
npm install
```

### 3. Запуск проекта
Для запуска локального сервера выполните команду:
```bash
npm start
```
Проект будет доступен по адресу: [http://localhost:3000](http://localhost:3000).

### 4. Деплой проекта
Проект задеплоен по адресу: [Ссылка на деплой](https://ваш-домен.com)

## Валидация данных
При редактировании данных на странице редактирования происходит проверка, что все поля заполнены. Если какое-то поле пустое, кнопка "Сохранить" будет неактивной, и данные не сохранятся.

## Дополнительные моменты:
- **Архивирование**: карточка перемещается в архив и скрывается с главной страницы, но может быть восстановлена.
- **Loader**: отображается во время загрузки данных с сервера.
- **Проверка данных**: если какие-то поля пусты, форма не позволит сохранить изменения.
- **Попап**: успешное сохранение данных отображается в виде всплывающего окна, которое исчезает через несколько секунд или по клику.


