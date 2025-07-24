'use client';

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../context/AuthContext';
import Link from 'next/link';

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const ok = await login(email, password);
    if (ok) router.push('/home');
    else setError('Invalid credentials');
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: '40px auto',
      background: 'var(--color-white)',
      borderRadius: 16,
      boxShadow: '0 4px 24px rgba(41,50,65,0.08)',
      padding: 32,
      border: '1px solid var(--color-accent)'
    }}>
      <form onSubmit={handleSubmit}>
        <h2 style={{
          color: 'var(--color-primary)',
          textAlign: 'center',
          marginBottom: 24,
          fontWeight: 700
        }}>Login</h2>
        {error && <p style={{color:'var(--color-secondary)', textAlign:'center'}}>{error}</p>}
        <div style={{marginBottom: 16}}>
          <label style={{display:'block', marginBottom: 6, color:'var(--color-dark)', fontWeight:500}}>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" required style={inputStyle} />
        </div>
        <div style={{marginBottom: 24}}>
          <label style={{display:'block', marginBottom: 6, color:'var(--color-dark)', fontWeight:500}}>Password</label>
          <div style={{position:'relative'}}>
            <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type={showPassword ? 'text' : 'password'} required style={{...inputStyle, paddingRight: 40}} />
            <button type="button" onClick={() => setShowPassword(v => !v)} style={showBtnStyle} tabIndex={-1}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button type="submit" style={submitBtnStyle}>Login</button>
        <div style={{marginTop: 20, textAlign:'center'}}>
          <span style={{color:'var(--color-dark)'}}>Don't have an account? </span>
          <Link href="/signup" style={{color:'var(--color-secondary)', fontWeight:600, textDecoration:'underline', cursor:'pointer'}}>Sign up</Link>
        </div>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  border: '1px solid var(--color-accent)',
  borderRadius: 8,
  fontSize: 16,
  background: 'var(--color-light)',
  color: 'var(--color-primary)',
  outline: 'none',
  marginBottom: 0,
  boxSizing: 'border-box',
};

const submitBtnStyle = {
  width: '100%',
  padding: '12px',
  background: 'var(--color-primary)',
  color: 'var(--color-white)',
  border: 'none',
  borderRadius: 8,
  fontWeight: 700,
  fontSize: 18,
  cursor: 'pointer',
  marginTop: 8,
  transition: 'background 0.2s',
};

const showBtnStyle = {
  position: 'absolute',
  right: 8,
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'none',
  border: 'none',
  color: 'var(--color-secondary)',
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: 14,
  padding: 0,
};
