// Imports
// ========================================================
import fs from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { ItemType } from './types';
import { NotFound } from '../../utils/errorHandlers';
import dictionary from '../../utils/dictionary.json';

// Database file
// ========================================================
const DB_FILE = path.join(__dirname, '../../..', 'data/db.json');

// Queries
// ========================================================
/**
 *
 * @returns
 */
const LIST = async () => {
  const data = fs.readFileSync(DB_FILE);

  return JSON.parse(data.toString())?.data;
};

/**
 *
 * @param payload
 * @returns
 */
const CREATE = async (payload: ItemType) => {
  const data = JSON.parse(fs.readFileSync(DB_FILE).toString())?.data;
  const entry = {
    id: uuid(),
    name: payload?.name,
  };
  data.push(entry);
  fs.writeFileSync(DB_FILE, JSON.stringify({ data }));

  return entry;
};

/**
 *
 */
const READ = async (id: string) => {
  const data = (
    JSON.parse(fs.readFileSync(DB_FILE).toString())?.data ?? []
  ).find((item: ItemType) => item.id === id);

  if (!data) throw new NotFound(dictionary.ITEMS.ERROR.NOT_FOUND);

  return data;
};

/**
 *
 */
const UPDATE = async (id: string, payload: ItemType) => {
  const data = JSON.parse(fs.readFileSync(DB_FILE).toString())?.data ?? [];
  await READ(id);
  const findIndex = data.findIndex((item: ItemType) => item.id === id);

  if (payload?.name) {
    data[findIndex].name = payload.name;
  }

  fs.writeFileSync(DB_FILE, JSON.stringify({ data }));

  return data[findIndex];
};

/**
 *
 */
const DELETE = async (id: string) => {
  const data = JSON.parse(fs.readFileSync(DB_FILE).toString())?.data ?? [];
  const find = await READ(id);
  const findIndex = data.findIndex((item: ItemType) => item.id === id);

  fs.writeFileSync(
    DB_FILE,
    JSON.stringify({
      data: [...data.slice(0, findIndex), ...data.slice(findIndex + 1)],
    }),
  );

  return find;
};

// Exports
// ========================================================
export { LIST, CREATE, READ, UPDATE, DELETE };
