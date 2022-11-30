import { PlaceSchema } from './../schemas/place.schema';
import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Place',
      schema: PlaceSchema
    }])
  ],
  controllers: [PlacesController],
  providers: [PlacesService]
})
export class PlacesModule {}
