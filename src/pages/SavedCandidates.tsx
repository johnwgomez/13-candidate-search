import { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import './SavedCandidates.css';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('savedCandidates');
    if (stored) {
      setSavedCandidates(JSON.parse(stored));
    }
  }, []);

  const handleReject = (id: number) => {
    const filtered = savedCandidates.filter((c) => c.id !== id);
    setSavedCandidates(filtered);
    localStorage.setItem('savedCandidates', JSON.stringify(filtered));
  };

  return (
    <div className="saved-candidates-container">
      <h1 className="page-title">Potential Candidates</h1>

      {savedCandidates.length === 0 ? (
        <p className="no-candidates-msg">No candidates have been accepted.</p>
      ) : (
        <table className="saved-candidates-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate) => (
              <tr key={candidate.id}>
                <td className="img-cell">
                  <img
                    src={candidate.avatar_url}
                    alt={`${candidate.login} avatar`}
                    className="candidate-avatar"
                  />
                </td>
                <td className="name-cell">
                  <strong>{candidate.login}</strong>
                  {candidate.name && (
                    <span className="real-name"> ({candidate.name})</span>
                  )}
                </td>
                <td>{candidate.location || '—'}</td>
                <td>
                  {candidate.email ? (
                    <a
                      href={`mailto:${candidate.email}`}
                      className="email-link"
                    >
                      {candidate.email}
                    </a>
                  ) : (
                    '—'
                  )}
                </td>
                <td>{candidate.company || '—'}</td>
                <td className="bio-cell">{candidate.bio || '—'}</td>
                <td>
                  <button
                    className="reject-button"
                    onClick={() => handleReject(candidate.id as number)}
                  >
                    –
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCandidates;
