import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
//import './index.css'

const App = lazy(
  () =>
    new Promise<{ default: React.ComponentType<any> }>((resolve) => {
      setTimeout(() => resolve(import("./App")), 0);
    })
);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
