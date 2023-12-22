import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Hello World!</h1><script>console.log(localStorage.getItem("city"))</script>';
  }
}
