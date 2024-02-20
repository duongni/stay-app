"use client";

import { Booking, Hotel, Room } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

interface RoomCardProps {
  hotel?: Hotel & { rooms: Room[] }; // Change the type of hotel to allow rooms
  room: Room; // Change room to be optional
  booking?: Booking[];
}

const RoomCard = ({ hotel, room, booking = [] }: RoomCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{room.title}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="aspect-square overflow-hidden relative h-[200px] rounded-lg">
          <Image
            fill
            src={room.image}
            alt={room.title}
            className="object-cover"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
