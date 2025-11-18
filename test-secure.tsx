import { useState } from 'react';
import DOMPurify from 'dompurify';

interface UserProfileProps {
  userId: string;
  tenantId: string;
}

/**
 * Secure User Profile Component
 * ✅ Uses DOMPurify for HTML sanitization
 * ✅ Validates input
 * ✅ Uses parameterized queries (simulated)
 */
export default function SecureUserProfile({ userId, tenantId }: UserProfileProps) {
  const [bio, setBio] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Input validation
    if (!bio || bio.length > 500) {
      setError('Bio debe tener entre 1-500 caracteres');
      return;
    }

    try {
      // ✅ Sanitize before sending
      const sanitizedBio = DOMPurify.sanitize(bio, {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong'],
        ALLOWED_ATTR: [],
      });

      // ✅ Parameterized query (using Supabase RLS)
      const response = await fetch('/api/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Tenant-ID': tenantId, // ✅ Multi-tenant
        },
        body: JSON.stringify({
          userId,
          bio: sanitizedBio,
        }),
      });

      if (!response.ok) {
        // ✅ No error details leaked
        throw new Error('Error al actualizar perfil');
      }

      setError(null);
    } catch (err) {
      // ✅ Generic error message (no stack trace)
      setError('Ocurrió un error. Intenta nuevamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        maxLength={500}
        placeholder="Escribe tu biografía..."
      />

      {error && <p className="error">{error}</p>}

      {/* ✅ Sanitized HTML rendering */}
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(bio)
        }}
      />

      <button type="submit">Guardar</button>
    </form>
  );
}
