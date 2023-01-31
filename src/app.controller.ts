import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { error } from 'console';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Csavar } from './csavar.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('api/csavar')
  async listCsavar(){
    const findrepo=this.dataSource.getRepository(Csavar)
    return await findrepo.find();
  }

  @Post('api/csavar')
  postCsavar(@Body() csavar: Csavar) {
    csavar.id = undefined;
    const boltRepo = this.dataSource.getRepository(Csavar);
    boltRepo.save(csavar);
    
  }
}
