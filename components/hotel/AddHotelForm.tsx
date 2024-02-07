"use client";
import { Hotel, Room } from "@prisma/client";

/*This defines an interface named AddHotelFormProps. 
It specifies that any object of type AddHotelFormProps 
must have a property named hotel that is either of type 
HotelWithRooms or null. 
if there is HotelWithRooms -> update hotel
if null -> create new */

interface AddHotelFormProps {
  hotel: HotelWithRooms | null;
}
/* This defines a new type named HotelWithRooms. It extends 
the Hotel type by adding a new property named rooms, 
which is an array of Room objects. This effectively combines 
the Hotel and Room types into a single type.*/

export type HotelWithRooms = Hotel & {
  rooms: Room[];
};
/* This defines a React functional component named AddHotelForm. 
It takes an object as a parameter, destructuring the hotel property 
from it, which must conform to the AddHotelFormProps interface.*/

const AddHotelForm = ({ hotel }: AddHotelFormProps) => {
  return <div>Add</div>;
};
export default AddHotelForm;

/* In summary, this code defines a React component named AddHotelForm 
that expects a hotel object as a prop, which should have a rooms property 
representing an array of rooms associated with the hotel.*/
