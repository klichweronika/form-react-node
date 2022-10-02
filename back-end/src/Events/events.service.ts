import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { Model } from 'mongoose';
import { Event } from './Model/event';
import { EventEntity, EventEntityDocument } from './Model/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(EventEntity.name)
    private readonly events: Model<EventEntityDocument>,
  ) {}

  async save(event: Event): Promise<void> {
    const newEvent = await this.events.create({
      id: randomUUID(),
      ...event,
    });

    await newEvent.save();
  }
}
