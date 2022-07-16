export interface Band {
  id: string;
  name: string;
  origin: string;
  membersId: Member[];
  website: string;
  genresIds: string[];
}

interface Member {
  _id: string;
  artist: string;
  instrument: string;
  years: string[];
}
