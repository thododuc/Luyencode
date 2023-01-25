const React = require('react');
const useState = React.useState;

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      {liked ? (
        <p>You liked this.</p>
      ) : (
        <button onClick={() => setLiked(true)}>Like</button>
      )}
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);