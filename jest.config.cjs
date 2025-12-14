// jest.config.cjs

// 1. استيراد next/jest باستخدام require()
// نستخدم الصيغة الآمنة لمعالجة توافق CommonJS/ESM
const nextJestFunc = require('next/jest');
const nextJest = nextJestFunc.default || nextJestFunc; // ضمان الحصول على الدالة (Function)

// 2. استدعاء nextJest() لإنشاء الدالة التي ستقوم بتهيئة Jest
const createJestConfig = nextJest({
  // توفير المسار لتطبيق Next.js
  dir: './',
});

// 3. تهيئات Jest المخصصة
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  // إضافة نمط التجاهل لمعالجة مشاكل التحويل إذا لزم الأمر
  transformIgnorePatterns: ['/node_modules/(?!assert)'], 
  coveragePathIgnorePatterns: ['/node_modules/', '/.next/', '/coverage/', '/public/'],
};

// 4. تصدير الناتج النهائي
// نستخدم module.exports لأن الملف هو .cjs
module.exports = createJestConfig(customJestConfig);