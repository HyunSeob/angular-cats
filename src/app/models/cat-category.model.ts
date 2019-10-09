import { Deserializable } from './deserializable.model';

export class CatCategory implements Deserializable {
  id: number;
  name: string;

  get slug() {
    return `${this.name}-${this.id}`;
  }

  deserialize(input: CatCategory) {
    Object.assign(this, input);
    return this;
  }
}
