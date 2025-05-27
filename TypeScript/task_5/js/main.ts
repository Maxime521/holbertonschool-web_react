interface MajorCredits {
  credits: number;
  majorBrand: 'MajorCredits';
}
interface MinorCredits {
  credits: number;
  minorBrand: 'MinorCredits';
}

function sumMajorCredits(subjects1: MajorCredits, subjects2: MajorCredits): MajorCredits {
  return {
    credits: subjects1.credits + subjects2.credits,
    majorBrand: 'MajorCredits',
  };
}

function sumMnorCredits(subjects1: MinorCredits, subjects2: MinorCredits): MinorCredits {
  return {
    credits: subjects1.credits + subjects2.credits,
    minorBrand: 'MinorCredits',
  };
}
