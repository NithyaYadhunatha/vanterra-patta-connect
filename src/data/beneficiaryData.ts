export interface Beneficiary {
  id: string;
  name: string;
  beneficiaryId: string;
  gender: 'Male' | 'Female' | 'Other';
  village: string;
  block: string;
  district: string;
  state: string;
  typeOfRight: 'IFR' | 'CR' | 'CFR';
  rightFullName: string;
  landArea: string;
  landUse: string;
  linkedSchemes: {
    name: string;
    details: string;
  }[];
  issuedOn: string;
  validTill: string;
}

// Sample beneficiary data for demonstration
export const beneficiariesData: Record<string, Beneficiary> = {
  '00457': {
    id: '00457',
    name: 'Smt. Kaveri Bai',
    beneficiaryId: 'FRA/MP/2023/00457',
    gender: 'Female',
    village: 'Banjari',
    block: 'Mandla',
    district: 'Mandla',
    state: 'Madhya Pradesh',
    typeOfRight: 'IFR',
    rightFullName: 'Individual Forest Right',
    landArea: '2.5 acres',
    landUse: 'Mixed agriculture (paddy + pulses)',
    linkedSchemes: [
      {
        name: 'PM-KISAN',
        details: '₹6,000/year support'
      },
      {
        name: 'MGNREGA',
        details: 'Rural employment support'
      },
      {
        name: 'Jal Jeevan Mission',
        details: 'Household tap water connection'
      }
    ],
    issuedOn: '12 March 2023',
    validTill: 'Lifetime (as per FRA provisions)'
  },
  '00458': {
    id: '00458',
    name: 'Shri Ramesh Kumar',
    beneficiaryId: 'FRA/MP/2023/00458',
    gender: 'Male',
    village: 'Patalkot',
    block: 'Tamia',
    district: 'Chhindwara',
    state: 'Madhya Pradesh',
    typeOfRight: 'CFR',
    rightFullName: 'Community Forest Right',
    landArea: '15.3 hectares',
    landUse: 'Community forest management',
    linkedSchemes: [
      {
        name: 'PM-KISAN',
        details: '₹6,000/year support'
      },
      {
        name: 'National Bamboo Mission',
        details: 'Bamboo cultivation support'
      },
      {
        name: 'MGNREGA',
        details: 'Rural employment support'
      }
    ],
    issuedOn: '05 January 2023',
    validTill: 'Lifetime (as per FRA provisions)'
  },
  '00459': {
    id: '00459',
    name: 'Smt. Phoolbai Maravi',
    beneficiaryId: 'FRA/MP/2023/00459',
    gender: 'Female',
    village: 'Ghughri',
    block: 'Dindori',
    district: 'Dindori',
    state: 'Madhya Pradesh',
    typeOfRight: 'IFR',
    rightFullName: 'Individual Forest Right',
    landArea: '1.8 acres',
    landUse: 'Medicinal plants cultivation',
    linkedSchemes: [
      {
        name: 'PM-KISAN',
        details: '₹6,000/year support'
      },
      {
        name: 'Ayushman Bharat',
        details: 'Health insurance coverage'
      },
      {
        name: 'PM Awas Yojana',
        details: 'Housing assistance'
      }
    ],
    issuedOn: '28 February 2023',
    validTill: 'Lifetime (as per FRA provisions)'
  }
};

// Get beneficiary by ID
export const getBeneficiaryById = (id: string): Beneficiary | null => {
  return beneficiariesData[id] || null;
};