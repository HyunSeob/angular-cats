import { Deserializable } from './deserializable.model';

export class CatImage implements Deserializable {
  id: string;
  url: string;
  width: number;
  height: number;

  deserialize(input: CatImage) {
    Object.assign(this, input);
    return this;
  }
}
