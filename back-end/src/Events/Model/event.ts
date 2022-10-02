import { IsDateString, IsEmail, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class Event {
  @MaxLength(100)
  @IsNotEmpty()
  @ApiProperty({
    example: 'Weronika',
    description: 'Name of the person that created an event.',
  })
  firstName: string;

  @MaxLength(100)
  @IsNotEmpty()
  @ApiProperty({
    example: 'Klich',
    description: 'Last name of the person that created an event.',
  })
  lastName: string;

  @MaxLength(100)
  @IsEmail()
  @ApiProperty({
    example: 'test@example.com',
    description: 'Email the person that created an event.',
  })
  email: string;

  @MaxLength(100)
  @IsDateString()
  @ApiProperty({
    example: '2022-10-01T20:53:12.648Z',
    description: 'Date when an event occured.',
  })
  eventDate: Date;
}
