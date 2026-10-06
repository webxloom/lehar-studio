// Runs before paint, mirroring Aji's original head script: adds the `js`
// class (enables .reveal animations) and applies a saved dark theme from
// the `lehar-theme` key. Light is the default. Prevents a theme flash.
export default function ThemeScript() {
  const code = `(function(){var r=document.documentElement;r.classList.add('js');try{var t=localStorage.getItem('lehar-theme');if(t==='dark'){r.setAttribute('data-theme','dark');var m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content','#081116')}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
