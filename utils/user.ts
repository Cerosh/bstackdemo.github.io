import { faker } from "@faker-js/faker/locale/en_AU";

export namespace UserGenerator {
  export interface Demouser {
    firstname: string;
    lastname: string;
    address: string;
    state: string;
    postalCode: string;
  }
  export function generateDemoUser(): Demouser {
    return {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      address: faker.location.streetAddress(),
      state: faker.location.state(),
      postalCode: faker.location.zipCode(),
    };
  }
}
