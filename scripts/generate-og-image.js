/**
 * Скрипт для генерации OG Image из HTML шаблона
 * 
 * Требования:
 * - Установлен Puppeteer: npm install puppeteer
 * 
 * Использование:
 * node scripts/generate-og-image.js
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateOGImage() {
  console.log('🚀 Запуск генерации OG Image...');
  
  const htmlPath = path.join(__dirname, '../public/og-image-template.html');
  const outputPath = path.join(__dirname, '../public/og-image.jpg');
  
  // Проверяем наличие HTML шаблона
  if (!fs.existsSync(htmlPath)) {
    console.error('❌ Файл og-image-template.html не найден!');
    process.exit(1);
  }
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Устанавливаем размер viewport
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 1,
    });
    
    // Загружаем HTML файл
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
    // Ждем загрузки всех ресурсов
    await page.waitForTimeout(1000);
    
    // Делаем скриншот
    await page.screenshot({
      path: outputPath,
      type: 'jpeg',
      quality: 90,
      fullPage: false,
    });
    
    console.log('✅ OG Image успешно создан!');
    console.log(`📁 Файл сохранен: ${outputPath}`);
    
    // Проверяем размер файла
    const stats = fs.statSync(outputPath);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`📊 Размер файла: ${fileSizeInMB} МБ`);
    
    if (stats.size > 1024 * 1024) {
      console.warn('⚠️  Внимание: размер файла больше 1 МБ. Рекомендуется оптимизировать.');
    }
    
  } catch (error) {
    console.error('❌ Ошибка при генерации изображения:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Запускаем генерацию
generateOGImage().catch(console.error);

