const Loader = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] w-full">
      <div className="w-8 h-8 border-2 border-t-accent border-white rounded-full animate-spin"></div>
      <p className="text-muted-foreground mt-4 text-center">{message}</p>
    </div>
  );
};

export default Loader;
