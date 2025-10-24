# Процесс работы с проектом my-info-site

## Важно! Правила работы:

### 1. НИКОГДА не работайте напрямую с веткой gh-pages
- Ветка gh-pages используется ТОЛЬКО для размещения собранного проекта
- Все изменения делайте ТОЛЬКО в ветке main

### 2. Рабочий процесс:

#### Шаг 1: Разработка (локально)
```bash
# Убедитесь, что вы на ветке main
git checkout main

# Запустите локальный сервер для разработки
npm run dev

# Открыт: http://localhost:5173/my-info-site/
```

#### Шаг 2: Сохранение изменений
```bash
# Добавьте измененные файлы
git add .

# Создайте коммит
git commit -m "Описание изменений"

# Отправьте в GitHub
git push origin main
```

#### Шаг 3: Деплой на GitHub Pages
```bash
# Используйте команду для деплоя
npm run deploy
```

### 3. Команды npm:

- `npm run dev` - Запуск локального сервера разработки
- `npm run build` - Сборка проекта для продакшена
- `npm run preview` - Предпросмотр собранного проекта
- `npm run deploy` - Деплой на GitHub Pages

### 4. Структура проекта:

```
my-info-site/
├── src/              # Исходный код (работаем здесь)
│   ├── apps/         # Главный App.jsx
│   ├── components/   # Компоненты (Navbar, PomodoroTimer и т.д.)
│   └── pages/        # Страницы (HomePage, AppsPage, AboutPage)
├── public/           # Статические файлы
├── dist/             # Собранный проект (создается автоматически)
├── index.html        # Главный HTML файл
├── vite.config.js    # Конфигурация Vite
└── package.json      # Зависимости и скрипты
```

### 5. Что делать при ошибках:

#### Если пропали файлы:
```bash
git fetch origin main
git reset --hard origin/main
npm install
```

#### Если не работает локальный сервер:
```bash
# Остановите все терминалы (Ctrl+C)
# Удалите кеш
rm -r -fo node_modules/.vite
# Перезапустите
npm run dev
```

#### Если GitHub Pages не обновляется:
```bash
# Пересоберите и задеплойте заново
npm run build
npm run deploy
# Подождите 2-3 минуты
```

### 6. GitHub Pages настройки:

В настройках репозитория (Settings > Pages) должно быть:
- Source: Deploy from a branch
- Branch: gh-pages
- Folder: / (root)

### 7. Ссылки:

- Локальный сервер: http://localhost:5173/my-info-site/
- Опубликованный сайт: https://nvafl80ex.github.io/my-info-site/
- Репозиторий: https://github.com/NVAfl80ex/my-info-site