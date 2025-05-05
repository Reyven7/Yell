interface Props {
  pictures: string[];
}

const Moodboard = ({ pictures }: Props) => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8">
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {pictures.map((picture, index) => (
          <div key={index} className="break-inside-avoid">
            <img
              className="w-full rounded-lg shadow-md mb-4 object-cover"
              src={picture}
              alt={`Moodboard image ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moodboard;
