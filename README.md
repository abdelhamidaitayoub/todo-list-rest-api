# Todo List Restful API

## Running Requirement

- docker
- Docker-compose

## Running project locally

Build images and start containers

```sh
docker-compose up -d
```

## Project description

This project is a simple todo rest api app, the main goal is to make it easy to maintain and scale that's why i decide to use Typescript (no framework), InversifyJS as IOC container and Follow SOLID principles..

### Exposes 5 endpoints:

- Get all todos (GET /tasks)
- Get todo (GET /tasks/{id})
- Create todo (POST /tasks)
- Update todo (PUT /tasks/{id})
- Delete todo (DELETE /tasks/{id})

### I used:

- Typescript (OOP approach)
- Yarn as node package manager
- ExpressJS
- Typeorm to create entities and repositories (mysql driver)
- InversifyJS as IOC container to easy manage and inject services
- Inversify-express-utils that provide some utilities for the development of Express application with InversifyJS
- Docker/docker-compose
- Eslint/prettier
