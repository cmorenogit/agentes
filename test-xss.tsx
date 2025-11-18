  // XSS vulnerability de prueba 1
  export function UserBio({ bio }: { bio: string }) {
    return <div dangerouslySetInnerHTML={{ __html: bio }} />;
  }
