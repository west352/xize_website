import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Set up static assets
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Set up view engine with layouts
  const viewsPath = join(__dirname, '..', 'views');
  app.setBaseViewsDir(viewsPath);
  app.setViewEngine('hbs');

  // Register partials directory for layouts
  hbs.registerPartials(join(viewsPath, 'layouts'));

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
