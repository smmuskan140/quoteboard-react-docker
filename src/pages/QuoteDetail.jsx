import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { quotes } from '../data/quotes';

export default function QuoteDetail() {
  const { id } = useParams();
  const quote = quotes.find((q) => q.id === parseInt(id, 10));

  if (!quote) {
    return (
      <div className="detail-container not-found">
        <h2>Quote Not Found</h2>
        <p>No quote found with ID #{id}.</p>
        <Link to="/" className="back-button">← Back to QuoteBoard</Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <Link to="/" className="back-button">← Back to QuoteBoard</Link>
      <article className="featured-card">
        <div className="badge-wrapper">
          <span className="quote-id-badge">Quote #{quote.id}</span>
          <span className="quote-category">{quote.category}</span>
        </div>
        <blockquote className="featured-quote">
          "{quote.text}"
        </blockquote>
        <p className="featured-author">— {quote.author}</p>
        <div className="route-info">
          <p><strong>Current Route:</strong> <code>/quote/{id}</code></p>
          <p className="status-indicator">✓ SPA client-side routing active (Nginx try_files fallback working)</p>
        </div>
      </article>
    </div>
  );
}
