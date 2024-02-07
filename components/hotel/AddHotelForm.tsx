"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Hotel, Room } from "@prisma/client";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

/* Below is to create form scheme using zod, and specify its type*/
const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters long",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters long",
  }),
  image: z.string().min(1, {
    message: "Image is required",
  }),
  country: z.string().min(1, {
    message: "Country is required",
  }),
  state: z.string().optional(),
  city: z.string().optional(),
  locationDescription: z.string().min(10, {
    message: "Description must be at least 10 characters long",
  }),
  gym: z.boolean().optional(),
  spa: z.boolean().optional(),
  bar: z.boolean().optional(),
  laundry: z.boolean().optional(),
  restaurant: z.boolean().optional(),
  shopping: z.boolean().optional(),
  freeParking: z.boolean().optional(),
  bikeRental: z.boolean().optional(),
  freeWifi: z.boolean().optional(),
  movieNights: z.boolean().optional(),
  swimmingPool: z.boolean().optional(),
  coffeeshop: z.boolean().optional(),
});

const AddHotelForm = ({ hotel }: AddHotelFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      country: "",
      state: "",
      city: "",
      locationDescription: "",
      gym: false,
      spa: false,
      bar: false,
      laundry: false,
      restaurant: false,
      shopping: false,
      freeParking: false,
      bikeRental: false,
      freeWifi: false,
      movieNights: false,
      swimmingPool: false,
      coffeeshop: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return <div>Add</div>;
};
export default AddHotelForm;

/* In summary, this code defines a React component named AddHotelForm 
that expects a hotel object as a prop, which should have a rooms property 
representing an array of rooms associated with the hotel.*/
