import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('*/api/health', () => HttpResponse.json({ success: true, data: 'ok' })),
];
