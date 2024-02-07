import prismadb from "@/lib/prismadb";
/* This imports the prismadb instance from a file located 
at "@/lib/prismadb". This is likely a configured instance of 
the Prisma ORM client, which provides access to the database.*/

/* Below defines an asynchronous function named getHotelById. 
It takes a hotelId parameter of type string, indicating the ID of 
the hotel to fetch.*/
export const getHotelById = async (hotelId: string) => {
  try {
    const hotel = await prismadb.hotel.findUnique({
      where: {
        id: hotelId,
      },
      include: {
        rooms: true,
      },
    });

    if (!hotel) return null;
    return hotel;
  } catch (error: any) {
    throw new Error(error);
  }
};
/*Function Body:

Inside the function, it tries to fetch a hotel record from the database 
using Prisma's findUnique method. It specifies the where clause to 
filter hotels by their ID and includes related rooms associated with the hotel.
If a hotel is found, it returns the hotel data, including its associated rooms.
If no hotel is found (!hotel), it returns null.
If an error occurs during the database operation, it catches the error, 
throws a new Error instance, and passes the error along for handling.
Error Handling:

The try-catch block is used to catch any errors that occur during the 
database operation. If an error occurs, it is caught and rethrown as 
a new Error instance. 

In summary, this code provides a reusable function for fetching hotel data 
by ID from a database using Prisma, with error handling to manage any 
potential errors that may occur during the database operation.*/
