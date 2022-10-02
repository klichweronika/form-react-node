import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class EventEntity {
  @Prop({ required: true, max: 100 })
  id!: string;

  @Prop({ required: true, max: 100 })
  firstName: string;

  @Prop({ required: true, max: 100 })
  lastName: string;

  @Prop({ required: true, max: 100 })
  email: string;

  @Prop({ required: true })
  eventDate: Date;
}

export const EventEntitySchema = SchemaFactory.createForClass(EventEntity);
export type EventEntityDocument = EventEntity & Document;
