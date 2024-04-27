const Card = () => {
  return (
    <>
      <div className="container" style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0",
        marginLeft: "2em",
        marginTop: "1em",
        width: "15em",
        border: "1px solid #000000",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "5%",
      }}>


        <img className="image" alt="pfp" src="src/assets/pfp.jpg" style={{
          borderRadius: "50%",
          height: "10em",
          width: "10em",
          paddingTop: "0.5em"
        }} />
        <h2 className="title" style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}> Title </h2>
        <p className="desc" style={{
          width: "15em",
          fontSize: "15px",
          alignContent: "center",
          textAlign: "center",
          paddingBottom: "1em",
          margin: "0",
        }}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam fuga quos eligendi quaerat assumenda quae dolore!   <br />   </p>

      </div>
    </>
  )
}

export default Card
