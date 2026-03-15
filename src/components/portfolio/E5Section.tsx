export default function E5Section() {
  return (
    <section id="e5" className="py-20">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Épreuve E5
        </h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
          Cette section présente la grille d'évaluation de l'épreuve E5 du BTS SIO.
        </p>

        <div className="flex justify-center">
          <a
            href="/assets/E5-doc.pdf"
            target="_blank"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Voir la grille d'évaluation
          </a>
        </div>

      </div>
    </section>
  );
}