

export default function FullVideoCard(props) {
        const { video} = props;
        if ( !video  ) {
      return null;
    }

  return (
    <>
      <div style={{ margin: "10px", padding: "10x", maxWidth: 345, maxHeight:345, borderRadius:"10px" }}>
        <video
        width= "100%"
        height="100%"
          src={video}
           loop={true} autoPlay={true} controls
        ></video>
     
      </div>
    </>
  );
}
