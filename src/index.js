const express = require('express');

const app = express();

/**
 * Informa o Express que estamos utilizando body tipo json
 */
app.use(express.json());

/**
 * GET  - Buscar uma informação
 * POST - Inserir uma informação
 * PUT - Alterar uma informação
 * PATCH - Alterar uma informação específica
 * DELETE - Deletar uma informação
 */

/**
 * Tipos de parametros
 * 
 * Route params => Identificar um recurso editar/deletar/buscar
 * Query params => Paginação, filtro
 * Body params => Objetos para inserção e alteração (JSON)
 */

app.get('/courses', (request, response) => {
  const { query } = request;
  console.log(query)
  return response.json([
    'Curso 1',
    'Curso 2',
    'Curso 3',
  ]);
})

app.post('/courses', (request, response) => {
  const { body } = request;
  console.log(body)
  return response.json([
    'Curso 1',
    'Curso 2',
    'Curso 3',
    'Curso 4',
  ]);
})

app.put('/courses/:id', (request, response) => {
  const { params } = request;
  console.log(params);

  return response.json([
    'Curso 6',
    'Curso 2',
    'Curso 3',
    'Curso 4',
  ]);
})

app.patch('/courses/:id', (request, response) => {
  return response.json([
    'Curso 6',
    'Curso 7',
    'Curso 3',
    'Curso 4',
  ]);
})

app.delete('/courses/:id', (request, response) => {
  return response.json([
    'Curso 6',
    'Curso 2',
    'Curso 4',
  ]);
})

app.listen(3333);