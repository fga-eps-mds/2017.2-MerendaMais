import { loggersLevel } from '../App';

export const logInfo = (file, method, text) => {
  if (loggersLevel === 'info' || loggersLevel === 'all' || loggersLevel === 'all -trace') {
    console.info(`[INFO] ${file} -> ${method}:\n${text}`);
  }
};

export const logWarn = (file, method, text) => {
  if (loggersLevel === 'warn' || loggersLevel === 'all' || loggersLevel === 'all -trace') {
    console.warn(`[WARN] ${file} -> ${method}:\n${text}`);
  }
};

export const logError = (file, method, text) => {
  if (loggersLevel === 'error' || loggersLevel === 'all' || loggersLevel === 'all -trace') {
    console.error(`[ERROR] ${file} -> ${method}:\n${text}`);
  }
};

export const logTrace = (file, method, text) => {
  if (loggersLevel === 'trace' || loggersLevel === 'all') {
    console.log(`[TRACE] ${file} -> ${method}:\n${text}`);
  }
};
