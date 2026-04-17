import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarDifferentSizesDemo = () => (
  <div className="flex items-center gap-3">
    <Avatar size="sm">
      <AvatarImage
        alt="Small avatar"
        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
      />
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage
        alt="Default avatar"
        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
      />
      <AvatarFallback>DF</AvatarFallback>
    </Avatar>
    <Avatar size="lg">
      <AvatarImage
        alt="Large avatar"
        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
      />
      <AvatarFallback>LG</AvatarFallback>
    </Avatar>
  </div>
);

export default AvatarDifferentSizesDemo;
