# Ecommerce Store (Next-Ecommerce)

Современное веб-приложение с каталогом товаров, построенное на **Next.js 16** с использованием **App Router**.

---

## Ссылки на деплой и API

**Live Demo:** https://next-ecommerce-beta-virid.vercel.app

**API:** https://dummyjson.com

Для авторизации на сайте используйте:

- username: emilys
- password: emilyspass

---

## Основная функциональность

- **Каталог товаров:** Просмотр списка товаров. Использован SSR для отображения актуальной информации и SEO-оптимизации динамических страниц
- **Поиск и фильтрация:** Поиск товаров по названию и категориям
- **Индивидуальная страница товара:** Детальная информация о товаре. Использован ISR для актуализации данных и быстрой первой загрузки
- **Корзина (Zustand):** Полнофункциональная корзина с сохранением состояния и управлением количеством товаров
- **Адаптивный UI:** Полностью адаптивный интерфейс с использованием Shadcn и Tailwind CSS 4

---

## Технологический стек (Dependencies)

Проект использует современную feature-based архитектуру, адаптированную под App Router в Next.js

### Основные библиотеки

- **Core:** `Next.js 16 (App Router) + TypeScript`
- **State Management:** `Zustand`
- **Data Fetching:** модифицированный `fetch` API Next.js 16
- **Styling:** `Tailwind CSS 4` + `Lucide React` (иконки)
- **UI Components:** `Shadcn UI`

---

## Инструкция по запуску

### 1. Клонирование репозитория

```bash
git clone https://github.com/OldPole/Next-Ecommerce.git
cd Next-Ecommerce
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Запуск в режиме разработки

```bash
npm run dev
```

### 4. Сборка проекта

```bash
npm run build
```
