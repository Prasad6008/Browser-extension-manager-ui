import React, { useState ,useEffect} from "react";
import logo from './images/logowhte.png'
import logowhite from './images/logo.svg'
import moon from './images/icon-moon.svg'
import sunlogo from './images/icon-sun.svg'
import devlenslogo from './images/logo-devlens.svg'
import styleSpy from './images/logo-style-spy.svg'
import speedBoost from './images/logo-speed-boost.svg'
import jsonwixard from './images/logo-json-wizard.svg'
import tabMasterPro from './images/logo-tab-master-pro.svg'
import viewportBuddy from './images/logo-viewport-buddy.svg'
import markupNotes from './images/logo-markup-notes.svg'
import gridGuides from './images/logo-grid-guides.svg'
import palettePicker from './images/logo-palette-picker.svg'
import linkChecker from './images/logo-link-checker.svg'
import domSnapshot from './images/logo-dom-snapshot.svg'
import consolePlus from './images/logo-console-plus.svg'


function App() {

  //Contents
const [extensions, setExtensions] = useState([
  {
    id: 'devlens',
    name: 'DevLens',
    description: 'Quickly inspect page layouts and visualize element boundaries.',
    logo: devlenslogo,
    isActive: false,
    isVisible: true
  },
  {
    id: 'styleSpy',
    name: 'StyleSpy',
    description: 'Instantly analyze and copy CSS from any webpage element.',
    logo: styleSpy,
    isActive: false,
    isVisible: true
  },
  {
    id: 'speedBoost',
    name: 'SpeedBoost',
    description: 'Optimizes browser resource usage to accelerate page loading.',
    logo: speedBoost,
    isActive: false,
    isVisible: true
  },
  {
    id: 'jsonWizard',
    name: 'JSON Wizard',
    description: 'Formats, validates, and prettifies JSON responses in-browser.',
    logo: jsonwixard,
    isActive: false,
    isVisible: true
  },
  {
    id: 'tabMasterPro',
    name: 'TabMaster Pro',
    description: 'Organizes browser tabs into groups and sessions.',
    logo: tabMasterPro,
    isActive: false,
    isVisible: true
  },
  {
    id: 'viewportBuddy',
    name: 'ViewportBuddy',
    description: 'Simulates various screen resolutions directly within the browser.',
    logo: viewportBuddy,
    isActive: false,
    isVisible: true
  },
  {
    id: 'markupNotes',
    name: 'Markup Notes',
    description: 'Enables annotation and notes directly onto webpages for collaborative debugging.',
    logo: markupNotes,
    isActive: false,
    isVisible: true
  },
  {
    id: 'gridGuides',
    name: 'GridGuides',
    description: 'Overlay customizable grids and alignment guides on any webpage.',
    logo: gridGuides,
    isActive: false,
    isVisible: true
  },
  {
    id: 'palettePicker',
    name: 'Palette Picker',
    description: 'Instantly extracts color palettes from any webpage.',
    logo: palettePicker,
    isActive: false,
    isVisible: true
  },
  {
    id: 'linkChecker',
    name: 'LinkChecker',
    description: 'Scans and highlights broken links on any page.',
    logo: linkChecker,
    isActive: false,
    isVisible: true
  },
  {
    id: 'domSnapshot',
    name: 'DOM Snapshot',
    description: 'Capture and export DOM structures quickly.',
    logo: domSnapshot,
    isActive: false,
    isVisible: true
  },
  {
    id: 'consolePlus',
    name: 'ConsolePlus',
    description: 'Enhanced developer console with advanced filtering and logging.',
    logo: consolePlus,
    isActive: false,
    isVisible: true
  }
]);

const [filter, setFilter] = useState('All'); // 'All', 'Active', 'Inactive'

const [activeFilter, setActiveFilter] = useState('All');  //active filters


const handleFilterChanger = (filter) => {
  setActiveFilter(filter);
  // your filter logic here...
};




const toggleActive = (id) => {
  setExtensions(prev =>
    prev.map(ext =>
      ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
    )
  );
};

const handleRemove = (id) => {
  setExtensions(prev =>
    prev.map(ext =>
      ext.id === id ? { ...ext, isVisible: false } : ext
    )
  );
};

const handleFilterChange = (value) => {
  setFilter(value);
};



//Theme 

const [isDark,setIsDark] = useState(false)
 
const handleTheme = () =>
{
  setIsDark(prev => !prev)
}

useEffect(() => {
  document.body.style.background = isDark 
    ? 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)' 
    : 'linear-gradient(180deg, #040918 0%, #091540 100%)';
  document.body.style.color = isDark ? 'black' : 'white';
}, [isDark]);

  return (
    <div className='container'>
       <header style={isDark ? {backgroundColor:'white'} : {}}>
          <div className="image-wrapper">
            <img  src={ !isDark ? logo : logowhite} alt="logo"></img>
          </div>

          <div className="sunlogo" style={isDark ? {backgroundColor:'hsl(0, 0.00%, 92.90%)'}:{}}>
            <img onClick={handleTheme} src={!isDark ? sunlogo : moon} alt="logo"></img>
          </div>
       </header>

       <nav>
          <div>Extensions List</div>
          <div>
    <button className={isDark ? 'navi_light' : 'navi_dark'}
      onClick={() => {handleFilterChanger('All') ; handleFilterChange('All')}}
      style={{
        backgroundColor: activeFilter === 'All' ? 'hsl(3, 86%, 64%)' : '',
        color: activeFilter === 'All' ? 'hsl(227, 75%, 14%)' : '',
      }}
    >
      All
    </button>
    <button className={isDark ? 'navi_light' : 'navi_dark'}
      onClick={() => {handleFilterChanger('Active') ; handleFilterChange('Active')}}
      style={{
        backgroundColor: activeFilter === 'Active' ? 'hsl(3, 86%, 64%)' : '',
        color: activeFilter === 'Active' ? 'hsl(227, 75%, 14%)' : '',
      }}
    >
      Active
    </button>
    <button className={isDark ? 'navi_light' : 'navi_dark'}
      onClick={() => {handleFilterChanger('Inactive') ; handleFilterChange('Inactive')}}
      style={{
        backgroundColor: activeFilter === 'Inactive' ? 'hsl(3, 86%, 64%)' : '',
        color: activeFilter === 'Inactive' ? 'hsl(227, 75%, 14%)' : '',
      }}
    >
      Inactive
    </button>
          </div>
       </nav>


  <section>
  {extensions
    .filter(ext => ext.isVisible)
    .filter(ext => {
      if (filter === 'Active') return ext.isActive;
      if (filter === 'Inactive') return !ext.isActive;
      return true; // All
    })
    .map(ext => (
      <div style={isDark ? {backgroundColor:'white',color:'hsl(227, 75%, 14%)',border:'1px solid hsl(0, 0%, 78%)'}:{}} className="content" key={ext.id}>
        <div className="d1">
          <div className="content_logo">
            <img className="image" src={ext.logo} alt={ext.name} />
          </div>
          <div className="content_des">
            <h2>{ext.name}</h2>
            <p style={isDark ? {backgroundColor:'white',color:'hsl(227, 75%, 14%)'}:{}}>{ext.description}</p>
          </div>
        </div>

        <div className="d2">
          <div >
            <button className={!isDark ? "remove_btn" : 'button-light'} onClick={() => handleRemove(ext.id)}>Remove</button>
          </div>
          <div>
            <label  className="toggle-switch">
              <input 
                type="checkbox"
                checked={ext.isActive}
                onChange={() => toggleActive(ext.id)}
              />
              <span style={isDark && !ext.isActive ? {backgroundColor:'hsl(0, 0%, 78%)'}:{}}   className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    ))}
</section>
       
    </div>
  );
}

export default App;
