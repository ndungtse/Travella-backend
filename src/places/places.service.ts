import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlaceDocument } from '../schemas/place.schema';

@Injectable()
export class PlacesService {
  constructor(@InjectModel('Place') private PlaceModel: Model<PlaceDocument>) {}
  async create() {
    return 'This action adds a new place';
  }

  findAll() {
    return `This action returns all places`;
  }

  findOne(id: number) {
    return `This action returns a #${id} place`;
  }

}
