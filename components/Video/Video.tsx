enum FileType {
  MP4 = 'video/mp4',
  WEBM = 'video/webm',
  OGG = 'video/ogg',
}

type VideoProps = {
  src: string;
  fileType: keyof typeof FileType;
};

export default function Video({ src, fileType }: VideoProps) {
  const type = FileType[fileType];

  return (
    <div className="relative max-w-full h-0">
      <video controls className="absolute top-0 left-0 h-full w-full border-0">
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

