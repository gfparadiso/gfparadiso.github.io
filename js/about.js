/* Uses React 17 UMD globals loaded in about.html */
(function () {
  const user = {
    name: 'Gianni Paradiso',
    imageUrl: 'images/about-portrait-200.jpg',
    bio: "I’m currently studying Web Development at Champlain College, focusing on design, coding, and user experience. I enjoy combining creativity and logic to build clean, functional, and visually interesting projects. My favorite tools include Adobe Creative Suite, Figma, and Procreate, which I use for both design and illustration work. Right now, I’m working on expanding my portfolio website and plan to build a full brand identity system that blends modern design with classic craftsmanship."
  };

  const h1El = React.createElement('h1', null, `About ${user.name}`);

  const imgEl = React.createElement('img', {
    src: user.imageUrl,
    alt: `${user.name} portrait`,
    width: 200,
    height: 270,
    style: { float: 'left', marginRight: '12px', marginBottom: '8px', borderRadius: '4px', objectFit: 'cover' }
  });

  const pEl = React.createElement('p', null, user.bio);

  ReactDOM.render(h1El, document.getElementById('h1'));
  ReactDOM.render(imgEl, document.getElementById('img'));
  ReactDOM.render(pEl, document.getElementById('content'));
})();
