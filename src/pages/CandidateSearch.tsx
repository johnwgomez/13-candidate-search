import React, { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch: React.FC = () => {
  // 1) State for storing a batch of GitHub users
  const [users, setUsers] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 2) On mount, fetch a random batch of users
  useEffect(() => {
    const fetchRandom = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await searchGithub();
        if (Array.isArray(result)) {
          setUsers(result as Candidate[]);
        } else {
          setUsers([]);
        }
      } catch (err: any) {
        setError(err.message || 'Error fetching users');
      } finally {
        setLoading(false);
      }
    };
    fetchRandom();
  }, []);

  return (
    <section style={{ padding: '1rem' }}>
      <h1>Candidate Search</h1>

      {loading && <p>Loading users…</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <div>
          <p>Fetched {users.length} users. (Check console for details.)</p>
        </div>
      )}
    </section>
  );
};

export default CandidateSearch;
