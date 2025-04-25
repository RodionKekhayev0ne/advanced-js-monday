# 📝 Task Management API

RESTful API для управления задачами. Реализован с использованием **Node.js**, **Express**, **TypeScript**, без базы данных — с in-memory хранилищем.

---

## 📦 Стек технологий

- Node.js (LTS)
- Express.js
- TypeScript (Strict mode)
- UUID v4
- ts-node-dev (для разработки)

---

## 🚀 Быстрый старт

### 📁 Клонирование проекта

```bash
git clone https://github.com/your-username/task-management-api.git
cd task-management-api
npm install
```

### ▶️ Запуск в режиме разработки

```bash
npm run dev
```

### 🏗️ Сборка и запуск в production-режиме

```bash
npm run build
npm start
```

---

## 🥪 Тестирование (optional)

```bash
npm test
```

---

## 📘️ API Эндпоинты

### 🔍 Получить все задачи

```
GET /tasks
```

### 🔍 Получить задачу по ID

```
GET /tasks/:id
```

### ➕ Создать задачу

```
POST /tasks
```

**Body (JSON):**

```json
{
  "description": "Buy groceries"
}
```

### ✏️ Обновить задачу

```
PUT /tasks/:id
```

**Body (JSON):**

```json
{
  "description": "Updated task",
  "completed": true
}
```

### ✅ Отметить задачу как выполненную

```
POST /tasks/complete/:id
```

### ❌ Удалить задачу по ID

```
DELETE /tasks/:id
```

### ❌ Удалить все задачи

```
DELETE /tasks
```

---

## 🧐 Модель Task

```ts
interface Task {
  id: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}
```

---

## ✅ Примеры curl

```bash
# Создать задачу
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"description":"Do homework"}'

# Все задачи
curl http://localhost:3000/tasks

# По ID
curl http://localhost:3000/tasks/<id>

# Обновить
curl -X PUT http://localhost:3000/tasks/<id> \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'

# Завершить
curl -X POST http://localhost:3000/tasks/complete/<id>

# Удалить одну
curl -X DELETE http://localhost:3000/tasks/<id>

# Удалить все
curl -X DELETE http://localhost:3000/tasks
```

---

## 📂 Структура проекта

```
src/
├── controllers/
│   └── task.controller.ts
├── models/
│   └── task.model.ts
├── routes/
│   └── task.routes.ts
├── services/
│   └── task.service.ts
├── app.ts
└── index.ts
```

---

## 📄 Лицензия

Apache license 2.0

---

## ✍️ Автор

- 👨‍💻 Выполнил: Кехаев Родион Денисович
- 🎓 AlmaU — Школа Цифровых Технологий
- 🗓️ Рубежный контроль №2 — 2025

