import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVICE } from 'src/config';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    ClientsModule.register([{name: NATS_SERVICE, transport: Transport.NATS, options: {
      servers: envs.NATS_SERVERS
    }}])
  ]
})
export class OrdersModule {}
