import { faker } from "@faker-js/faker/locale/en_AU";

export namespace UserGenerator {
  export interface Demouser {
    "First Name": string;
    "Last Name": string;
    Address: string;
    "State/Province": string;
    "Postal Code": string;
  }
  export function generateDemoUser(): Demouser {
    return {
      "First Name": faker.person.firstName(),
      "Last Name": faker.person.lastName(),
      Address: faker.location.streetAddress(),
      "State/Province": faker.location.state(),
      "Postal Code": faker.location.zipCode(),
    };
  }
}
