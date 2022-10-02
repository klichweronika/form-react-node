import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Event } from './Model/event';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly events: EventsService) {}

  @Post()
  @HttpCode(201)
  save(@Body() event: Event): Promise<void> {
    return this.events.save(event);
  }
}
