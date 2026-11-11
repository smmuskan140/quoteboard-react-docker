import React from 'react';
import { Link } from 'react-router-dom';
import { quotes } from '../data/quotes';

export default function Home() {
  return (
    <div className="home-container">
      <header className="app-header">
        <h1>QuoteBoard</h1>
        <p className="subtitle">Curated quotes for developers and thinkers</p>
      </header>

      <main className="quotes-grid">
        {quotes.map((quote) => (
          <div key={quote.id} className="quote-card">
            <span className="quote-category">{quote.category}</span>
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-author">— {quote.author}</p>
            <Link to={`/quote/${quote.id}`} className="view-link">
              View Quote #{quote.id} →
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}
