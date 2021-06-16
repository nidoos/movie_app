import React from 'react';
function Food({ fav }) {//props 내부의 fav
  return <h1> I like {fav} </h1>;
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samsso" />
    </div>
  );
}

export default App;
