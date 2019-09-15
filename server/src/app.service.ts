import { Injectable } from '@nestjs/common';
// import { ConfigService } from '../config/config.service';

@Injectable()
export class AppService {

    constructor() {
        // if (config.isApiAuthEnabled) {
        //   // Authorization is enabled
        // }
      }

    getHello(): string {
        return 'Server and MySql are successfuly running!';
    }
    
}
