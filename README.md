# Products Shop

## Описание
Проект представляет собой веб-приложение на React с использованием Next.js, которое отображает список товарных позиций с возможностью их сортировки, фильтрации и добавления в корзину.

## Функционал
1. **Сортировка товаров**
    - По названию (по возрастанию/убыванию)
    - По цене (по возрастанию/убыванию)

2. **Фильтрация товаров**
    - По цене (от и до)
    - По признаку "Новинка" (Switch)

3. **Корзина**
    - Добавление товара в корзину
    - Отображение общего количества и стоимости товаров в корзине
    - Увеличение/уменьшение количества товара в корзине

4. **Детальная страница товара**
    - Название
    - Цена
    - Описание

5. **Вывод списка товаров**
    - Название
    - Цена
    - Бренд

## Технологии
- **React** (v19.0.0)
- **Next.js** (v15.2.3)
- **TypeScript**
- **SCSS**
- **Material UI** (mui.com)
- **json-server** (имитация API на клиенте)

## Установка и запуск

### 1. Клонирование репозитория
```sh
git clone git@github.com:RomaSushevskij/products-shop.git
cd products-shop
```

### 2. Установка зависимостей
```sh
npm install
```

### 3. Запуск проекта в режиме разработки
```sh
npm run dev
```

Этот скрипт запустит два процесса:
- **dev:client**: Next.js в режиме разработки с Turbopack
- **dev:server**: JSON Server на порту 3100

### 4. Сборка проекта
```sh
npm run build
```

### 5. Запуск production-сборки
```sh
npm run start
```

## Code Style
- Используется ESLint и Prettier
- Использование хуков и контекста для управления состоянием
