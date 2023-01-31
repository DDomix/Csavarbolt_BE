import { Body, Controller, Get, Post, Render, Delete, Param } from '@nestjs/common';
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
    const repo=this.dataSource.getRepository(Csavar)
    return await repo.find();
  }

  @Post('api/csavar')
  postCsavar(@Body() csavar: Csavar) {
    csavar.id = undefined;
    const Repo = this.dataSource.getRepository(Csavar);
    Repo.save(csavar);
  }
  
  @Delete('api/csavar/:id')
  deleteCsavar(@Param('id') id: number) {
    const Repo = this.dataSource.getRepository(Csavar);
    Repo.delete(id);
  }
  
  /* @Post('api/csavar/:id/rendeles')
  rendelescsavar(@Param('id') id: number){
    const Repo = this.dataSource.getRepository(Csavar);
    Repo.find(id);
    this.postCsavar;
  }*/
}
