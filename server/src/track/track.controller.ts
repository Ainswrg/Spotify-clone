/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get } from "@nestjs/common";


@Controller('/tracks')
export class TrackController {
  
  create() {

  }
  @Get()
  getAll() {
    return 'WORK'
  }

  getOne() {

  }

  delete() {
    
  }
}