import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";

const AvatarGroupDemo = () => (
  <AvatarGroup>
    <Avatar>
      <AvatarImage
        alt="Ari Cole"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&dpr=2&q=80"
      />
      <AvatarFallback>AC</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage
        alt="Mika Tran"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&dpr=2&q=80"
      />
      <AvatarFallback>MT</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage
        alt="Noah Kim"
        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=128&h=128&dpr=2&q=80"
      />
      <AvatarFallback>NK</AvatarFallback>
    </Avatar>
    <AvatarGroupCount>+4</AvatarGroupCount>
  </AvatarGroup>
);

export default AvatarGroupDemo;
