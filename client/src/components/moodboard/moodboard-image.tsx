const MoodboardImage = ({ image }: { image: string }) => {
  return (
    <div>
      <img className="h-auto max-w-full rounded-lg" src={image}></img>
    </div>
  );
};

export default MoodboardImage;
