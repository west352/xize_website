import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return {
      title: 'Shandong Xize Auto Parts - BYD & Volkswagen Parts Wholesale & Export',
      description:
        'Shandong Xize Auto Parts Co., Ltd. is a professional automotive parts company specializing in wholesale and retail of BYD and Volkswagen parts. 30 years experience, 10+ stores, export services available.',
      company: {
        name: 'Shandong Xize Auto Parts Co., Ltd.',
        tagline: 'Your Trusted Partner for Quality Auto Parts',
        yearsExperience: 30,
        storeCount: 10,
        warehouseSize: 2000,
        employeeCount: 100,
      },
      contact: {
        wechat: 'xize_autoparts',
        whatsapp: '+86-123-4567-8900',
        email: 'contact@xizeautoparts.com',
      },
    };
  }
}
