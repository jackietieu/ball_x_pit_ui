import { dev } from '$app/environment';

// Environment variables helper
export const env = {
  // Check if we're in development mode
  isDev: dev,

  // Get environment variables (Vite automatically loads .env files)
  isDebug: import.meta.env.VITE_DEV_MODE === 'true',

  // API URL for development
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5173',

  // Node environment
  nodeEnv: import.meta.env.NODE_ENV || 'development',

  // All Vite environment variables
  all: import.meta.env
};

// Development-only console logging
export function devLog(...args: any[]) {
  if (env.isDev && env.isDebug) {
    console.log('[DEV]', ...args);
  }
}

// Development-only warning
export function devWarn(...args: any[]) {
  if (env.isDev && env.isDebug) {
    console.warn('[DEV WARNING]', ...args);
  }
}

// Development-only error
export function devError(...args: any[]) {
  if (env.isDev && env.isDebug) {
    console.error('[DEV ERROR]', ...args);
  }
}
