import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarDifferentRadiusDemo = () => (
  <div className="flex items-center gap-3">
    <Avatar radius="full">
      <AvatarImage
        alt="Round avatar"
        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
      />
      <AvatarFallback>RF</AvatarFallback>
    </Avatar>
    <Avatar radius="lg">
      <AvatarImage
        alt="Large radius avatar"
        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
      />
      <AvatarFallback>RL</AvatarFallback>
    </Avatar>
    <Avatar radius="md">
      <AvatarImage
        alt="Medium radius avatar"
        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
      />
      <AvatarFallback>RM</AvatarFallback>
    </Avatar>
    <Avatar radius="none">
      <AvatarImage
        alt="Square avatar"
        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
      />
      <AvatarFallback>RN</AvatarFallback>
    </Avatar>
  </div>
);

export default AvatarDifferentRadiusDemo;
