import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { ModalState } from "./context/ModalContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <ModalState>
        <App />
      </ModalState>
    </React.StrictMode>
  </BrowserRouter>
)
