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
import AmenityItem from "../AmenityItem";
import {
  Bath,
  Bed,
  BedDouble,
  BedSingle,
  Home,
  Mountain,
  School,
  SunSnow,
  TreePine,
  Tv,
  User,
  UtensilsCrossed,
  VolumeX,
  Waves,
  Wifi,
} from "lucide-react";

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
        <div className="grid grid-cols-2 gap-4 content-start text-sm">
          <AmenityItem>
            <Bed className="h-4 w-4" />
            {room.bedCount} Bed{"(s)"}
          </AmenityItem>
          <AmenityItem>
            <User className="h-4 w-4" />
            Sleep {room.guestCount}
          </AmenityItem>
          <AmenityItem>
            <Bath className="h-4 w-4" />
            {room.bathroomCount} Bath{"(s)"}
          </AmenityItem>
          {!!room.kingBed && (
            <AmenityItem>
              <BedDouble className="h-4 w-4" />
              {room.kingBed} King Bed{"(s)"}
            </AmenityItem>
          )}
          {!!room.queenBed && (
            <AmenityItem>
              <BedDouble className="h-4 w-4" />
              {room.queenBed} Queen Bed{"(s)"}
            </AmenityItem>
          )}
          {!!room.twinBed && (
            <AmenityItem>
              <BedSingle className="h-4 w-4" />
              {room.twinBed} Twin Bed{"(s)"}
            </AmenityItem>
          )}
          {room.roomService && (
            <AmenityItem>
              <UtensilsCrossed className="h-4 w-4" />
              Room Service
            </AmenityItem>
          )}
          {room.TV && (
            <AmenityItem>
              <Tv className="h-4 w-4" />
              TV
            </AmenityItem>
          )}
          {room.balcony && (
            <AmenityItem>
              <Home className="h-4 w-4" />
              Balcony
            </AmenityItem>
          )}
          {room.freeWifi && (
            <AmenityItem>
              <Wifi className="h-4 w-4" />
              Free Wifi
            </AmenityItem>
          )}
          {room.cityView && (
            <AmenityItem>
              <School className="h-4 w-4" />
              City view
            </AmenityItem>
          )}
          {room.gardenView && (
            <AmenityItem>
              <TreePine className="h-4 w-4" />
              Garden view
            </AmenityItem>
          )}
          {room.mountainView && (
            <AmenityItem>
              <Mountain className="h-4 w-4" />
              Mountain view
            </AmenityItem>
          )}
          {room.oceanView && (
            <AmenityItem>
              <Waves className="h-4 w-4" />
              Ocean view
            </AmenityItem>
          )}
          {room.airCondition && (
            <AmenityItem>
              <SunSnow className="h-4 w-4" />
              Air condition
            </AmenityItem>
          )}
          {room.soundProofed && (
            <AmenityItem>
              <VolumeX className="h-4 w-4" />
              Sound Proofed
            </AmenityItem>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
