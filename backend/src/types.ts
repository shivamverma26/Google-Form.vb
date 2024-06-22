// Define TypeScript types/interfaces as per your form submission structure

export interface Submission {
    name: string;
    email: string;
    phone: string;
    githubLink: string;
    stopwatchTime: string; // Assuming stopwatchTime is stored as a string (formatted duration)
  }
  
  export interface SubmissionsDB {
    submissions: [];
  }
  