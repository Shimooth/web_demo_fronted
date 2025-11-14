import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Component to render HTML pages
function HtmlPage({ htmlFile }) {
  const [htmlContent, setHtmlContent] = React.useState('');
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    // Clean up previous scripts
    const existingScripts = containerRef.current?.querySelectorAll('script');
    existingScripts?.forEach(script => {
      const src = script.getAttribute('src');
      if (src) {
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript && existingScript !== script) {
          existingScript.remove();
        }
      }
    });

    fetch(htmlFile)
      .then(response => response.text())
      .then(html => {
        setHtmlContent(html);

        // Wait for DOM to update, then execute scripts
        setTimeout(() => {
          if (containerRef.current) {
            // Find and execute all script tags
            const scripts = containerRef.current.querySelectorAll('script');
            scripts.forEach((script) => {
              const newScript = document.createElement('script');

              // Copy attributes
              Array.from(script.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
              });

              // Copy content for inline scripts
              if (!script.src) {
                newScript.textContent = script.textContent;
              }

              // Replace old script with new one
              script.parentNode.replaceChild(newScript, script);
            });
          }
        }, 0);
      })
      .catch(error => console.error('Error loading HTML:', error));
  }, [htmlFile]);

  return (
    <div ref={containerRef}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

// Navigation menu component
function Navigation() {
  const pages = [
    { path: '/', name: '首页', file: '/pages/index.html' },
    { path: '/yqgk', name: '园区概况', file: '/pages/yqgk.html' },
    { path: '/yqxw', name: '园区新闻', file: '/pages/yqxw.html' },
    { path: '/cxcy', name: '创新创业', file: '/pages/cxcy.html' },
    { path: '/qyfw', name: '企业服务', file: '/pages/qyfw.html' },
    { path: '/fwpt', name: '服务平台', file: '/pages/fwpt.html' },
    { path: '/lacx', name: '孵化成效', file: '/pages/lacx.html' },
    { path: '/yqdj', name: '园区党建', file: '/pages/yqdj.html' },
    { path: '/zcfg', name: '政策法规', file: '/pages/zcfg.html' },
    { path: '/zlxz', name: '资料下载', file: '/pages/zlxz.html' },
    { path: '/lxwm', name: '联系我们', file: '/pages/lxwm.html' }
  ];

  return (
    <nav style={{
      backgroundColor: '#0a9ec3',
      padding: '15px',
      marginBottom: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        {pages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '5px 10px',
              borderRadius: '3px',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#088aaa'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HtmlPage htmlFile="/pages/index.html" />} />
          <Route path="/yqgk" element={<HtmlPage htmlFile="/pages/yqgk.html" />} />
          <Route path="/yqxw" element={<HtmlPage htmlFile="/pages/yqxw.html" />} />
          <Route path="/cxcy" element={<HtmlPage htmlFile="/pages/cxcy.html" />} />
          <Route path="/qyfw" element={<HtmlPage htmlFile="/pages/qyfw.html" />} />
          <Route path="/fwpt" element={<HtmlPage htmlFile="/pages/fwpt.html" />} />
          <Route path="/lacx" element={<HtmlPage htmlFile="/pages/lacx.html" />} />
          <Route path="/yqdj" element={<HtmlPage htmlFile="/pages/yqdj.html" />} />
          <Route path="/zcfg" element={<HtmlPage htmlFile="/pages/zcfg.html" />} />
          <Route path="/zlxz" element={<HtmlPage htmlFile="/pages/zlxz.html" />} />
          <Route path="/lxwm" element={<HtmlPage htmlFile="/pages/lxwm.html" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
