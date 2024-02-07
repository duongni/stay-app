import { getHotelById } from "@/actions/getHotelById";
import AddHotelForm from "@/components/hotel/AddHotelForm";
import { auth } from "@clerk/nextjs";

/*this page a a server component. 
This is where we will fetch data from API or from backend
create function to check if the hotel exsit, user want to 
update hotel, if not, they want to add new hotel.

This defines an interface named HotelPageProps that 
specifies the structure of the props expected by 
the Hotel component. It indicates that the params 
prop should have a hotelId property of type string.*/

interface HotelPageProps {
  params: {
    hotelId: string;
  };
}

/*This defines an asynchronous functional component named 
Hotel that takes an object destructured from the HotelPageProps 
interface as its parameter. It's likely a Next.js server-side component 
since it uses the async keyword. */

const Hotel = async ({ params }: HotelPageProps) => {
  /* function that call hotel by its Id*/

  const hotel = await getHotelById(params.hotelId);

  /* The component first calls the getHotelById function, passing in 
    the hotelId extracted from the props. This function likely fetches 
    hotel data from an API or database.
It then obtains the current user's ID using the auth() function.
If there is no user authenticated (!userId), it returns a message indicating 
that the user is not authenticated.
If there is a user authenticated, it checks if a hotel exists (hotel && ...). 
If it exists, it compares the userId associated with the hotel with the current 
user's ID. If they don't match, it returns a message indicating access denied.
Finally, it renders the AddHotelForm component with the hotel data passed as a prop.*/

  const { userId } = auth();

  if (!userId) return <div>Not authenticated...</div>;

  if (hotel && hotel.userId !== userId) return <div>Access denied...</div>;

  return (
    <div>
      <AddHotelForm hotel={hotel} />
    </div>
  );
};
export default Hotel;

/* In summary, this code defines a Next.js server-side component (Hotel) that 
fetches hotel data, checks if the current user is authenticated, and conditionally 
renders an "Access denied" message or the AddHotelForm component based on 
authentication status and hotel ownership.*/
