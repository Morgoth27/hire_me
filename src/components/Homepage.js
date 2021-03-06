import React from 'react';

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div style={linkStyle}>
          <a href="#">about me</a>
        </div>
        <div style={linkStyle}>
          <a href="#">contact me</a>
        </div>
        <div style={linkStyle}>
          <a href="#">my work</a>
        </div>
        <div style={linkStyle}>
          <a href="#">About</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact</a>
        </div>
      </section>
    </nav>
  );
}

.container {
    display: flex;
    flex-flow: wrap;
    position: relative;
    height: 100vh;
    min-height: max-content;
    width: 100vh;
    background-image: url(../assets/Morgoth-half.jpg);
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
}

header {
    display: inline-flex;
    position: absolute;
    justify-content: space-between;
    padding: 2%;
    font-size: xx-large;
    top: 1em;
    right: 2.5em;
    width: 120px;
}

.headerTiffany {
    color: #202020;
    margin-right: 5px;
    padding-right: 7px;
}

.headerHing, .cme, .me, .work {
    color: blanchedalmond;
    padding-left:9px;
}

.nav {
    display: inline-flex;
    position: absolute;
    font-size: xx-large;
    top: 9em;
    right: -9em;
    width: 400px;
}

.aboutMeNav {
    display: inline-flex;
    position: absolute;
    top: -.5em;
    right: 7.5em;
    padding-left: 2px;;
}

.contactNav {
    display: inline-flex;
    position: absolute;
    top: 1.5em;
    right: 7.5em;
    padding-left: 2px;;
}

.workNav {
    display: inline-flex;
    position: absolute;
    top: 3.5em;
    right: 6.7em;
    padding-left: 2px;
}

/* hover glow properties over name on main page */
.aboutMeNav:hover,
.contactNav:hover,
.workNav:hover {
    text-shadow: 0px 0px 7px #abaaac;
}
