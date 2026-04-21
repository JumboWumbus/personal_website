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
    <div className="relative max-w-full aspect-video">
      <video controls className="">
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

