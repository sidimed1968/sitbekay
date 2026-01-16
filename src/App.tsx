import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold">Coordination Générale des Villages - Hassi El Bekay</h1>
        <p className="mt-2 text-gray-600">Portail de la Coordination — Développement communautaire en Mauritanie</p>
      </header>

      <main className="max-w-4xl mx-auto p-8">
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold">Bienvenue</h2>
          <p className="mt-4">Ceci est une version de développement locale. Modifiez le contenu sous <code>src/</code> pour personnaliser le site.</p>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto p-8 text-sm text-gray-500">© Coordination MR</footer>
    </div>
  );
}
