import { useState } from 'react';
import { notes } from '../data/quizData';

export default function Notes() {
  const [activeTab, setActiveTab] = useState('hiragana');

  return (
    <div className="notes-container">
      <div className="container">
        <h2>Reference Notes</h2>

        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <button
            className={`btn ${activeTab === 'hiragana' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('hiragana')}
            style={{ marginRight: '0.5rem' }}
          >
            Hiragana
          </button>
          <button
            className={`btn ${activeTab === 'katakana' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('katakana')}
            style={{ marginRight: '0.5rem' }}
          >
            Katakana
          </button>
          <button
            className={`btn ${activeTab === 'numbers' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('numbers')}
          >
            Numbers
          </button>
        </div>

        <div className="notes-grid">
          {notes[activeTab].map((note, idx) => (
            <div key={idx} className="note-card">
              {activeTab === 'numbers' ? (
                <>
                  <div className="note-number">{note.number}</div>
                  <div className="note-character">{note.japanese}</div>
                  <div className="note-romaji">{note.romaji}</div>
                  <div className="note-meaning">{note.meaning}</div>
                </>
              ) : (
                <>
                  <div className="note-character">{note.character}</div>
                  <div className="note-romaji">{note.romaji}</div>
                  <div className="note-meaning">{note.meaning}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
