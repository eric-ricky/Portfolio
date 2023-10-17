const BackgroundVideo = () => {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform -scale-x-100 grayscale"
        >
          <source src="/videos/matrix.mp4" type="video/mp4" />
          {/* Add more source elements for different video formats */}
        </video>
      </div>
    </>
  );
};

export default BackgroundVideo;
