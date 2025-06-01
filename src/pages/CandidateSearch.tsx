// src/pages/CandidateSearch.tsx
import { useEffect, useState } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import './CandidateSearch.css';
import { useNavigate } from 'react-router-dom';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      setCandidates(data || []);
    };
    fetchCandidates();
  }, []);

  const handleSaveCandidate = () => {
    const candidate = candidates[currentIndex];
    let savedCandidates: Candidate[] = [];
    try {
      const storedData = localStorage.getItem('savedCandidates');
      savedCandidates = storedData ? JSON.parse(storedData) : [];
    } catch {
      savedCandidates = [];
    }

    const isAlreadySaved = savedCandidates.some(
      (saved) => saved.id === candidate.id
    );
    if (!isAlreadySaved) {
      savedCandidates.push(candidate);
      localStorage.setItem(
        'savedCandidates',
        JSON.stringify(savedCandidates)
      );
      navigate('/potentialcandidates');
    } else {
      alert('This candidate is already saved!');
    }
  };

  const handleSkipCandidate = () => {
    setCurrentIndex((prev) => {
      if (prev + 1 < candidates.length) {
        return prev + 1;
      } else {
        alert('No more candidates available.');
        return prev;
      }
    });
  };

  const current = candidates[currentIndex];

  return (
    <div className="candidate-search-page">
      <nav className="main-nav">
        <ul>
          <li>
            <a href="/" className="nav-link active">
              Home
            </a>
          </li>
          <li>
            <a href="/potentialcandidates" className="nav-link">
              Potential Candidates
            </a>
          </li>
        </ul>
      </nav>

      <div className="search-content">
        <h1 className="page-title">Candidate Search</h1>

        {current ? (
          <div className="candidate-card">
            <img
              src={current.avatar_url}
              alt="Candidate Avatar"
              className="candidate-avatar"
            />
            <div className="candidate-details">
              <h2 className="candidate-name">
                {current.login}
                {current.name ? ` (${current.name})` : ''}
              </h2>
              <p>
                <strong>Location:</strong>{' '}
                {current.location || 'N/A'}
              </p>
              <p>
                <strong>Email:</strong>{' '}
                {current.email ? (
                  <a
                    href={`mailto:${current.email}`}
                    className="email-link"
                  >
                    {current.email}
                  </a>
                ) : (
                  'N/A'
                )}
              </p>
              <p>
                <strong>Company:</strong>{' '}
                {current.company || 'N/A'}
              </p>
              <p>
                <strong>Bio:</strong>{' '}
                {current.bio || 'N/A'}
              </p>
              <p>
                <strong>GitHub:</strong>{' '}
                <a
                  href={current.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  {current.login}'s Profile
                </a>
              </p>
            </div>
            <div className="candidate-actions">
              <button
                onClick={handleSkipCandidate}
                className="skip-btn"
              >
                –
              </button>
              <button
                onClick={handleSaveCandidate}
                className="save-btn"
              >
                +
              </button>
            </div>
          </div>
        ) : (
          <p className="no-more-msg">No more candidates available.</p>
        )}
      </div>
    </div>
  );
};

export default CandidateSearch;