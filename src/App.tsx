import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ShelvesPage } from "./pages/ShelvesPage"
import { QueuePage } from "./pages/QueuePage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShelvesPage />} />
        <Route path="/queue" element={<QueuePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
