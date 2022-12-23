import api from './api';
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

export function setupMockServer() {
  createProdMockServer(api);
}