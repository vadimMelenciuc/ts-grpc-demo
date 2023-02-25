import { AddressBook, Person_PhoneType } from "./ts/generated/address";

export const db: AddressBook = {
  people: [
    {
      name: "John Doe",
      phones: [
        {
          phoneNumber: "0000",
          phoneType: Person_PhoneType.UNRECOGNIZED,
        },
      ],
    },
    {
      name: "Jane Doe",
      phones: [
        {
          phoneNumber: "0000",
          phoneType: Person_PhoneType.UNRECOGNIZED,
        },
      ],
    },
  ],
};
