  // XSS vulnerability de prueba
  export function UserBio({ bio }: { bio: string }) {
    return <div dangerouslySetInnerHTML={{ __html: bio }} />;
  }
