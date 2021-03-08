import { createRequire } from 'module';
global.require = createRequire((global as any).import.meta.url);
