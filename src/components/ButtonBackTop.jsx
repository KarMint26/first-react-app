import upArrow from "../assets/Icon/up-arrows.png";

const ButtonBackTop = () => {
  return (
    <button
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
      id="myBtn"
      title="Go to top"
    >
      <img src={upArrow} alt="back-to-top" />
    </button>
  );
};

export default ButtonBackTop;
