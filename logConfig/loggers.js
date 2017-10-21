import { loggersLevel } from '../App';

export const logInfo = (file, method, text) => {
  if (loggersLevel === 'info' || loggersLevel === 'all') {
    console.info(`${file} -> ${method}:\n${text}`);
  }
};

export const logWarn = (file, method, text) => {
  if (loggersLevel === 'warn' || loggersLevel === 'all') {
    console.warn(`${file} -> ${method}:\n${text}`);
  }
};

export const logError = (file, method, text) => {
  if (loggersLevel === 'error' || loggersLevel === 'all') {
    console.error(`${file} -> ${method}:\n${text}`);
  }
};

export const logTrace = (file, method, text) => {
  if (loggersLevel === 'trace' || loggersLevel === 'all') {
    console.log(`${file} -> ${method}:\n${text}`);
  }
};
