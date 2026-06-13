interface PhotoSectionProps {
  photo: string;
  firstName: string;
  lastName: string;
}

export function PhotoSection({ photo, firstName, lastName }: PhotoSectionProps) {
  if (!photo) {
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    return (
      <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-white/20 text-3xl font-bold text-white">
        {initials}
      </div>
    );
  }

  return (
    <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-white/30">
      <img
        src={photo}
        alt={`${firstName} ${lastName}`}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
